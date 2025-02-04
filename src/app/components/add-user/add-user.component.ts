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
  isLoading = false;

  constructor(private mainService: MainService) { }

  onSubmit() {
    // You can replace this with an actual service call to send the data to your backend
    console.log('Submitted contact data:', this.contact);
    this.isLoading = true;
    let dataBase = {
      properties: this.contact
    }
    this.mainService.addContactToExternalDB(dataBase).subscribe(data => { 
      console.log(data);
      this.isLoading = false;
      if(data.success){
        Swal.fire({
          icon: 'success',
          title: 'Contact Created!',
          text: `Your contact ${data.response.properties.firstname} has been successfully created with a status of ${data.response.properties.lifecyclestage} and an internal ID of ${data.response.properties.hs_object_id}!`,
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
      this.isLoading = false;
      console.log(error);
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
