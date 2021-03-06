import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { CompaniesService } from '../share/companies.service';
import { CompanyService } from '../share/company.service';
import { Icompany } from '../models/icompany'
import { Todo } from '../models/todo'


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  title = 'scrumBoard';

  show:boolean = false;
  link:string = "mostrar";

  company: Icompany[];

  todo:Todo[] = [
    {id:'1',
    name:'crear codigo',
    descripcion:'implementar programacion',
    estado:'todo'
    },
    {id:'2',
    name:'Diseño',
    descripcion:'implementar color y obtimizacion',
    estado:'todo'
    },
    {id:'3',
    name:'revicion',
    descripcion:'reaccion al programa',
    estado:'todo'
    }

  ];

  CodeReview:Todo[]=[
    {id:'',
    name:'',
    descripcion:'',
    estado:''
    }

  ];

  InProcess:Todo[]=[
    {id:'',
    name:'',
    descripcion:'',
    estado:'todo'
    }
  ];


  done:Todo[]=[

    {id:'',
    name:'',
    descripcion:'',
    estado:''
    }
  ];


 
  

 

  constructor(private fb: FormBuilder,
    private companyService: CompanyService,
    private service: CompaniesService) { }


  ngOnInit(): void {
    
    /*
    this.service.getCompanyArray().subscribe((response: Icompany[]) => {
      console.log(response);
      this.company = response;
    }, error => console.error(error));
    */
  }

  showHide(){
    if(this.show){
      this.show=false;
      this.link = "mostrar";
    }else{
      this.show=true;
      this.link = "ocultar";

    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      console.log(event.item.data);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        console.log(event.currentIndex);
                        console.log(event.container.data);
                        console.log(event.previousContainer.data);
                        event.previousContainer.data.forEach(function(item){  
                          console.log(item);  
                        });  

    }
  }

}
