import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(
    private http: HttpClient
  ) { }

  public getFunctionData(name: string) {
    const url = `https://stefa-functions.azurewebsites.net/api/function1?name=${name}`;
    return this.http.get<string>(url).pipe(catchError((error: any) => throwError(error)));
  }
}
