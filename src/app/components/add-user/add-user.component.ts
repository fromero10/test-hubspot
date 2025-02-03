import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  contact = {
    firstname: '',
    lastname: '',
    email: ''
  };

  constructor(private mainService: MainService) { }

  onSubmit() {
    // You can replace this with an actual service call to send the data to your backend
    console.log('Submitted contact data:', this.contact);
    let dataBase = {
      properties: this.contact
    }
    this.mainService.addContactToDB(dataBase).subscribe(data => { 
      console.log(data);
      if(data.success){
        Swal.fire({
          icon: 'success',
          title: 'Contact Created!',
          text: 'Your contact has been successfully created!',
        });

      } else{
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'There was an issue creating the contact. Please try again later.',
        });
      }
  
      // Reset the form after submission
      this.contact = { firstname: '', lastname: '', email: '' };
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was an issue connecting to the server. Please try again later.',
      });
    });
    // SweetAlert to confirm submission
    
  }


  ngOnInit(): void {
  }

}
