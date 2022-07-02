import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-threshold-comp',
  templateUrl: './threshold-comp.component.html',
  styleUrls: ['./threshold-comp.component.scss'],
})
export class ThresholdCompComponent implements OnInit {
  showPopupcategory = false;
  overLayshow = false;
  dataPicked: any = [];
  showMainmodal = false;
  showSubthresHold = false;
  idOfcatagory: any;
  idformain: any;
  idforSub: any;
  indexformain: any;

  constructor() {}

  ngOnInit(): void {}
  showPopup() {
    this.showPopupcategory = !this.showPopupcategory;
    this.overLayshow = !this.overLayshow;
  }

  closeModel(bol: any) {
    if (bol == false) {
      this.showPopupcategory = !this.showPopupcategory;
      this.overLayshow = !this.overLayshow;
    }
  }
  sendFormdata(value: any) {
    value.Main = [];
    this.dataPicked.push(value);
  }
  deleteRow(i: any) {
    this.dataPicked.splice(i, 1);
  }

  mainThresholdmodal(id: any) {
    this.idOfcatagory = id;
    this.showMainmodal = !this.showMainmodal;
    this.overLayshow = !this.overLayshow;
  }

  sendMainmodal(data: any) {
    let iddata = this.dataPicked.find(
      (dataid: any) => dataid.id == this.idOfcatagory
    );
    data.Sub = [];
    this.dataPicked[this.dataPicked.indexOf(iddata)].Main.push(data);
  }

  closeMainmodel(bol: any) {
    if (bol == false) {
      this.showMainmodal = !this.showMainmodal;
      this.overLayshow = !this.overLayshow;
    }
  }
  deleteMain(index: any, index2: any) {
    this.dataPicked[index].Main.splice(index2, 1);
  }
  subThresholdmodal(id: any, id2: any, index1: any) {
    this.idformain = id;
    this.idforSub = id2;
    this.indexformain = index1;
    this.showSubthresHold = !this.showSubthresHold;
    this.overLayshow = !this.overLayshow;
  }
  closeMainsubmodel(bol: any) {
    if (bol == false) {
      this.showSubthresHold = !this.showSubthresHold;
      this.overLayshow = !this.overLayshow;
    }
  }
  sendMainsubmodal(data: any) {
    let dataofid = this.dataPicked.find(
      (idData: any) => idData.id == this.idformain
    );
    let dataofid2 = this.dataPicked[this.indexformain].Main.find(
      (idData: any) => idData.id == this.idforSub
    );
    let maain = this.dataPicked[this.dataPicked.indexOf(dataofid)].Main;
    maain[maain.indexOf(dataofid2)].Sub.push(data);
  }
  deleteSubmain(index: any, index2: any, index3: any) {
    this.dataPicked[index].Main[index2].Sub.splice(index3, 1);
  }
}
