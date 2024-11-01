import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SurveyForm, SurveyFormService } from './survey-form.service';
import { MatSliderModule } from '@angular/material/slider';
import Swal from 'sweetalert2';

/**
 * @title Survey Form
 */
@Component({
  selector: 'async-survey-form',
  standalone: true,
  providers: [SurveyFormService],
  imports: [
    MatButtonModule, 
    MatDividerModule,
    MatSliderModule, 
    MatProgressBarModule, 
    MatCheckboxModule, 
    MatRadioModule, 
    CommonModule, 
    ReactiveFormsModule, 
    RouterModule, 
    MatIconModule, 
    MatExpansionModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule
  ],
  templateUrl: 'survey-form.component.html',
  styleUrls: ['survey-form.component.scss'],
})
export class SurveyFormComponent implements OnDestroy, OnInit {
  surveyForm: FormGroup = new FormGroup({});
  subscriptions: Subscription[] = [];
  isSpinning = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private surveyService: SurveyFormService,
  ) { }

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      difficulty: ['', Validators.required],
      challenges: this.fb.array([], this.minSelectedCheckboxes(1)), // FormArray with custom validator
      strategies: this.fb.array([], this.minSelectedCheckboxes(1)), // FormArray with custom validator
      targetAudience: this.fb.array([], this.minSelectedCheckboxes(1)), // FormArray with custom validator
      recruitmentTool: ['', Validators.required],
      misconception: ['', Validators.required],
      businessMotivation: ['', Validators.required],
      recruitmentAttempt: ['', Validators.required],
      trainingSupport: ['', Validators.required],
      comfortWithTech: ['', Validators.required],
      businessTimeDedication: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      reservationCode: [''],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      interestedInTraining: ['', Validators.required],
    });
  }

  // Custom validator as an arrow function
  minSelectedCheckboxes = (min: number = 1) => (formArray: AbstractControl): ValidationErrors | null => {
    const totalSelected = (formArray.value || []).length;
    return totalSelected >= min ? null : { minSelected: true };
  };

  // Accessors for FormArrays
  get challenges(): FormArray {
    return this.surveyForm.get('challenges') as FormArray;
  }

  get strategies(): FormArray {
    return this.surveyForm.get('strategies') as FormArray;
  }

  get targetAudience(): FormArray {
    return this.surveyForm.get('targetAudience') as FormArray;
  }

  // Add or remove checkbox values in FormArray
  onChallengeChange(event: any) {
    this.updateFormArray(event, this.challenges);
  }

  onStrategyChange(event: any) {
    this.updateFormArray(event, this.strategies);
  }

  onTargetAudienceChange(event: any) {
    this.updateFormArray(event, this.targetAudience);
  }

  private updateFormArray(event: any, formArray: FormArray) {
    if (event.checked) {
      formArray.push(this.fb.control(event.source.value));
    } else {
      const index = formArray.controls.findIndex(x => x.value === event.source.value);
      formArray.removeAt(index);
    }
  }

  // Scroll to top when clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSubmit(): void {
    this.isSpinning = true;
    this.markAllAsTouched();

    if (this.surveyForm.valid) {
      const formData: SurveyForm = this.surveyForm.value;

      this.subscriptions.push(
        this.surveyService.submit(formData).subscribe(
          res => {
            Swal.fire({
              position: "bottom",
              icon: 'success',
              text: 'Thank you for completing the survey form. Your responses have been submitted.',
              showConfirmButton: false,
              timer: 10000
            });
            this.isSpinning = false;
          },
          error => {
            this.isSpinning = false;
            Swal.fire({
              position: "bottom",
              icon: 'info',
              text: 'Server error occurred, please try again',
              showConfirmButton: false,
              timer: 4000
            });
          }
        )
      );
    } else {
      this.isSpinning = false;
      //console.log("Form is invalid:", this.surveyForm.errors);
      //console.log("Invalid controls:", this.findInvalidControls());
      this.surveyForm.markAllAsTouched();
    }
  }

  // Helper method to mark all form controls as touched
  private markAllAsTouched() {
    Object.keys(this.surveyForm.controls).forEach(controlName => {
      const control = this.surveyForm.get(controlName);
      if (control instanceof FormArray) {
        control.controls.forEach(ctrl => ctrl.markAsTouched());
      } else {
        control?.markAsTouched();
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
