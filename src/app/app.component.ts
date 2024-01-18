import { Component, OnInit } from '@angular/core';
import { FunctionService } from './service/function.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public name: string = 'Leandro';
  public response: string = '';

  constructor(
    private functionService: FunctionService
  ) { }

  ngOnInit(): void {
    this.functionService.getFunctionData(this.name).subscribe((res: any) => {
      this.response = res.message;
      console.log(this.response);
    });
  }





}
