import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-sub-threshodl',
  templateUrl: './sub-threshodl.component.html',
  styleUrls: ['./sub-threshodl.component.scss'],
})
export class SubThreshodlComponent implements OnInit {
  @Output() closeMainsubmodel: EventEmitter<any> = new EventEmitter();
  @Output() sendMainsubmodal: EventEmitter<any> = new EventEmitter();

  mainSubthresHoldform = new FormGroup({
    id: new FormControl(uuidv4()),
    name: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  collectmainSubData() {
    this.closeMainsubmodel.emit(false);
    this.sendMainsubmodal.emit(this.mainSubthresHoldform.value);
  }
  closesubPopup() {
    this.closeMainsubmodel.emit(false);
  }
}
