
import { Component, Input,OnInit } from '@angular/core';
import { FormControl ,FormGroup,FormBuilder, Validators ,FormArray} from '@angular/forms';
import{BookService} from '../services/book.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data:any;
  value=''
  
  
  constructor(private bookservice:BookService) { }

  

  
  ngOnInit(): void {
    
    
  }
  
  getVal(val){
    this.value=val;
    
    return val
  }
  

  // sendParam(){
    
  //   this.bookservice.getBookList(this.value).subscribe({
  //     next(data) {
  //       console.log('success: ', data);
  //       this.data=data;
        
  //     },
  //     error(msg) {
  //       console.log('error: ', msg);
  //     }
  //   });
  //   this.isShown = ! this.isShown;
  //   return this.data
    
  // }

  
  sendParam(){
    
    this.bookservice.getBookList(this.value).subscribe({
      next:(data)=> {
        data['items'].forEach(element=>{
          console.log(element.volumeInfo.title);
          
        });
        console.log('success: ', data);
        this.data=data['items'];
        
      },
      error(msg) {
        console.log('error: ', msg);
      }
    });
   
    return this.data
    
  }

  
  

}
