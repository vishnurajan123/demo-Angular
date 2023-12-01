import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empName:string=""
  empImageUrl:string = "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
  empDesg:string=""
  empSalary:string=""

  userAdd= ()=>{
    alert("Add button clicked ..!!")
  }

  getEmpName(event:any){
    this.empName=event.target.value
  }
  userSubmit(userDetails:any){
    if(userDetails.value){
      alert(`${userDetails.value} addedd successfully`)
    }
    else{
      alert("please fill the form completely...")
    }
  }


  empSubmit=()=>{
    if(!this.empName || !this.empDesg || !this.empSalary){
      alert("Please fill the form completely ")
    }
    else{
      alert(`------Employee Details-----------
      Employee name : ${this.empName}
      Employee designation : ${this.empDesg}
      Employee salary : ${this.empSalary}
      
      `)
    }
  }

}
