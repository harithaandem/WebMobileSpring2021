import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  toDoDetails: any=[];
  constructor() { 

  }

  ngOnInit(): void {
  }

  addTodo(toDoText: string){
    let todo = {
      toDoText: toDoText,
      toDoId: new Date().getTime(),
      isCompleted: false,
      selected: false
    }
    this.toDoDetails.push(todo);
  }

  completeToDo(todo: any){
     this.toDoDetails.map((item: any) => {
     if(item.toDoId === todo.toDoId){
       item.isCompleted = !item.isCompleted
     }
    });
  }
  deleteToDo(todo:any){
    console.log(this.toDoDetails)
    this.toDoDetails = this.toDoDetails.filter((item: any) => item.toDoId !== todo.toDoId);
  }
  selectTodo(todo: any){
    this.toDoDetails.map((item: any) => {
      if(item.toDoId === todo.toDoId){
        item.selected = !item.selected
      }
     });
  }
  deleteAll(){
    this.toDoDetails = [];
  }
  deleteSelected(){
      this.toDoDetails = this.toDoDetails.filter((item: any) => item.selected === false);
  }
}
