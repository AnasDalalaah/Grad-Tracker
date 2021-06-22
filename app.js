'use strict';
let array=[];
let headerAraay=[ 'Student Name', ' Student Grade', 'Course', 'Status'];

let divEl= document.getElementById('container');
let tableEl=document.createElement('table');
divEl.appendChild(tableEl);

function getRandomNum(min, max) {
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function header() {

  let tr1El=document.createElement('tr');
  tableEl.appendChild(tr1El);

  for (let i = 0; i < headerAraay.length; i++) {

    let thEl=document.createElement('th');
    tr1El.appendChild(thEl);
    thEl.textContent=headerAraay[i];


  }

}
header();

function student(name,course) {

  this.name=name;
  this.course=course;
  this.grade=this.update();
  array.push(this);
}

student.prototype.update=function () {

  return this.grade= getRandomNum(0,100);

};

student.prototype.render=function () {

  let tr2El=document.createElement('tr');
  tableEl.appendChild(tr2El);

  let td1El=document.createElement('td');
  let td2El=document.createElement('td');
  let td3El=document.createElement('td');
  let td4El=document.createElement('td');

  tr2El.appendChild(td1El);
  tr2El.appendChild(td2El);
  tr2El.appendChild(td3El);
  tr2El.appendChild(td4El);


  td1El.textContent=this.name;
  td2El.textContent=this.grade;
  td3El.textContent=this.course;

  if(this.grade<50){

    this.condation='Fail';
    td4El.textContent=this.condation;


  }else if(this.grade>=50){

    this.condation='Success';
    td4El.textContent=this.condation;
  }






};

let form=document.getElementById('form');

form.addEventListener('submit',eventclick);

function eventclick(event) {

  event.preventDefault();

  let name=event.target.R1.value;
  let course=event.target.R2.value;

  let newstudent= new student(name,course);
  newstudent.render();

  saveData();
}

function saveData() {

  let data=JSON.stringify(array);
  localStorage.setItem('allData',data);

}

function getData() {

  let info1=localStorage.getItem('allData');
  let info2=JSON.parse(info1);

  for (let i = 0; i < array.length; i++) {

  }

  if(info2){
    info2=array;
  }

}
getData();
