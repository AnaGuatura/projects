import { Component } from '@angular/core';

import fontawesome from '@fortawesome/fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  action: string;
  showAddInput = true;
  count = 0;   
  tasks = [{
    desc: 'Finish first challenge!', 
    checked: false 
  }]; 
  task: string = '';
  taskSearch: string = '';
  selected = 'add';
  selectActive: string;
  totalItens = this.tasks.length;
  undoneItens = this.totalItens;
  doneItens = 0;

  constructor() { }
  
  ngOnInit() {}

  //verifica qual action será executada
  clickToAction(type: string){
    this.selected = type;

    if (type === 'add')
    {
      this.showAddInput = true;
    }else{
      this.showAddInput = false;
    } 
  }

  //seleciona o tipo de ação da navbar
  setSelected(type: string){
    this.selected = type;
  } 

  getSelected(type: string){
    return this.selected == type;
  }
  
  //adiciona uma task ao vetor
  addTask(task){

    let tasks = {
      desc: task, 
      checked: false
    }
    
    if(!task){
      return false;
    }else{
      this.tasks.push(tasks);
    }

    this.updateTasks();
  }

  //deleta task do vetor
  deleteTask(index){

    this.tasks.splice(index, 1);
    
    this.updateTasks();
  }

  //verifica se foi atribuído um check a task e contabiliza as que foram 
  changed(item: string){
    this.count = 0;
    this.selectActive = item;

    this.tasks.forEach(item=>{
      
      if(item.checked){
        this.count = this.count+1;
      }
    });

    this.updateTasks();
  }

  //atualiza o total de tasks, tasks feitas e taks não feitas
  updateTasks(){
    
    this.totalItens = this.tasks.length;
    this.doneItens = this.count;
    this.undoneItens = this.totalItens - this.count;
  }

  //verifica se foi atribuído o check a task
  isActive(task: string){
    return this.selectActive === task;
  }

  //procura uma taks no vetor 
  searchTask(){
    let value = this.taskSearch.toLowerCase();
    let temp = this.tasks;  

    this.tasks = temp.filter(elem => {
      return (elem["desc"].toLowerCase().includes(value));
    });

  }
}
