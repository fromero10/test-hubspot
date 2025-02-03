import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Array<any> = [];
  company1: Array<any> = [];
  company2: Array<any> = [];
  company3: Array<any> = [];
  isLoading = false;
  company: any;
  companies = [{
    name: "Company 1",
    address: "1234 Main St",
    logo: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    industry: "Tech",
    description: "This is a description of the tech company",
    id:1
  },
  {
    name: "Company 2",
    address: "1234 Secondary street St",
    logo: "https://fastly.picsum.photos/id/358/2592/1728.jpg?hmac=JXzil51PVU98ffv0R368vfhtSwYa3VZMz51nHnEztyk",
    industry: "Construction",
    description: "This is a description of the construction company",
    id:2
  },
  {
    name: "Company 3",
    address: "1234 Third St",
    logo: "https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI",
    industry: "Finance",
    description: "This is a description of the finance company",
    id:3
  },
  ]
  companyId!: string | null;
  constructor(private mainService: MainService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.mainService.getContacts().subscribe(data => {
      let contacts = data.results;
      this.categorizeContacts(contacts);
    });
  }

  sendToHubSpot(contact: any) {
    this.isLoading = true;
    let object = {
      contact,
      company: this.company
    }
    this.mainService.postHubSpotContacts(object).subscribe(data => {
      console.log(data);
      if(data.success === true) {
        Swal.fire({
          title: 'Success',
          text: 'Contact added to HubSpot',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Contact not added to HubSpot',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    })
  }

  categorizeContacts(contacts: any) {
    const currentDate = new Date();
    for (let i = 0; i < contacts.length; i++) {
      let contact = contacts[i];
      const createdDate = new Date(contact.createdAt);
      const daysOld = Math.floor((currentDate.getTime() - createdDate.getTime()) / (1000 * 3600 * 24));

      if (daysOld <= 3) {
        this.company1.push(contact);  // Less than or equal to 3 days old
      } else if (daysOld >= 4 && daysOld <= 7) {
        this.company2.push(contact);  // Between 4 and 7 days old
      } else {
        this.company3.push(contact);  // More than 7 days old
      }
      
    }
    if (this.companyId === '1') {
      this.contacts = this.company1;
      this.company = this.companies[0];
    } else if (this.companyId === '2') {
      this.contacts = this.company2;
      this.company = this.companies[1];
    } else {
      this.contacts = this.company3;
      this.company = this.companies[2];
    }
  }

}
