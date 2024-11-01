import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


export interface SurveyForm {
  challenges: string[];
  otherChallenges?: string;
  difficulty: string;
  strategies: string[];
  otherStrategies?: string;
  targetAudience: string[];
  trainingSupport: string;
  recruitmentTool: string;
  businessMotivation: string;
  recruitmentAttempt: string;
}



@Injectable()
export class SurveyFormService {
  // Define API
  api = 'https://diamondprojectapi-y6u04o8b.b4a.run/';
  //api = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Error handling
  private handleError(error: any) {
    let errorMessage: {code: string, message: string};
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = {'code': error.status, 'message': error.message};
    }
    //window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }


  // user submit survey
  submit(formData: SurveyForm): Observable<any> {
    //console.log('form record', formData);
    return this.http
      .post<any>(this.api + '/survey/partners', formData)
      .pipe(retry(1), catchError(this.handleError));
  }

  
}