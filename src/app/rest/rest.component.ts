import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  users: Users[] = [];
  first_name: any;
  last_name: any;
  totalLength:any;
  page:number = 1;
  filterObj = {
    "first_name": "",
    "last_name": "",
    "email": "",
    "gender": "",
    "avatar": "",
    "domain": "",
    "available": "",
    // "PageNumber": "1",
    // "PageSize": "5"
  }
  constructor(public rs:RestService){

  }
  ngOnInit(): void {
    this.rs.getUsers().subscribe((response: Users[]) => {
      this.users = response;
    })
    // this.rs.postUsers(,this.filterObj).subscribe((response: Users) => {

    // })
  }
  Search(){
    if (this.first_name == ""){
      this.ngOnInit();
    }else{
      this.users = this.users.filter(res => {
        return res.first_name.toLocaleLowerCase().match(this.first_name.toLocaleLowerCase());
      })
    }
    if (this.last_name == ""){
      this.ngOnInit();
    }else{
      this.users = this.users.filter(res => {
        return res.last_name.toLocaleLowerCase().match(this.last_name.toLocaleLowerCase());
      });
    }
  }
  key:string = 'id';
  reverse:boolean = false;
  sort(key: string){
    this.key= key;
    this.reverse = !this.reverse;
  }
}
