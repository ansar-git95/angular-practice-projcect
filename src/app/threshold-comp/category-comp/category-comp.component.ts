import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-category-comp',
  templateUrl: './category-comp.component.html',
  styleUrls: ['./category-comp.component.scss'],
})
export class CategoryCompComponent implements OnInit {
  catrgoryform = new FormGroup({
    id: new FormControl(uuidv4()),
    name: new FormControl(''),
    color: new FormControl(''),
  });

  colorPicker: any = [
    { color: '#FB760D', class: 'orange', active: true },
    { color: '#B71E3E', class: 'red', active: false },
    { color: '#f7a532', class: 'yellow', active: false },
    { color: '#21CC97', class: 'green', active: false },
    { color: '#109aa4', class: 'turkuaz', active: false },
    { color: '#6599FF', class: 'blue', active: false },
    { color: '#464646', class: 'dark-gray', active: false },
    { color: '#8b8b8b', class: 'light-gray', active: false },
    // '#f7a532',
    // '#21CC97',
    // '#109aa4',
    // '#6599FF',
    // '#464646',
    // '#8b8b8b',
  ];

  @Output() closeModel: EventEmitter<any> = new EventEmitter();
  @Output() sendFormdata: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.dafaultColorPick();
  }

  closePopup() {
    this.closeModel.emit(false);
  }

  colorObject(item: any) {
    const getIndex = this.colorPicker.indexOf(item);

    this.colorPicker = this.colorPicker.map((item: any) => {
      return { ...item, active: false };
    });
    this.colorPicker[getIndex].active = true;
    this.catrgoryform.patchValue({
      color: item.color,
    });
  }
  collectData() {
    this.closeModel.emit(false);
    this.sendFormdata.emit(this.catrgoryform.value);
  }
  dafaultColorPick() {
    let item = this.colorPicker[0].class;
    this.catrgoryform.patchValue({
      color: item,
    });
  }
}
