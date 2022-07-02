import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-main-threshold',
  templateUrl: './main-threshold.component.html',
  styleUrls: ['./main-threshold.component.scss'],
})
export class MainThresholdComponent implements OnInit {
  mainthresHoldform = new FormGroup({
    id: new FormControl(uuidv4()),
    name: new FormControl(''),
  });

  @Output() closeMainmodel: EventEmitter<any> = new EventEmitter();
  @Output() sendMainmodal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  collectmainData() {
    this.closeMainmodel.emit(false);
    this.sendMainmodal.emit(this.mainthresHoldform.value);
  }
  closePopup() {
    this.closeMainmodel.emit(false);
  }
}
