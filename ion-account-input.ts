import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

/*
  Generated class for the GbAccountInputComponent component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'ion-account-input',
  templateUrl: 'ion-account-input.html'
})
export class IonAccountInputComponent {
  inputNow: boolean;
  extraCardNoValue = "";
  @Input()
  get extraCardNo(){
    return this.extraCardNoValue;
  }
  set extraCardNo(val){
    this.extraCardNoValue = val;
    this.extraCardNoChange.emit(this.extraCardNoValue);
  }
  @Input() cardNo: string;
  constructor(public el:ElementRef) {
  }
  @Output() extraCardNoChange:EventEmitter<string> = new EventEmitter<string>();
  
  importNum(event) {
    this.extraCardNoValue = this.extraCardNoValue.replace(/\s/g, "");
    if (this.extraCardNoValue.length === 4) {
      event.target.blur();
    }
  }
  accountFocus(){
    this.el.nativeElement.querySelector("#account-num input").focus();
  }
}
