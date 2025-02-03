import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

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
  company: any;
  constructor(private mainService: MainService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.company = this.route.snapshot.paramMap.get('companyId');
    this.mainService.getContacts().subscribe(data => {
      let contacts = data.results;
      this.categorizeContacts(contacts);
    });
  }

  sendToHubSpot(contact: any) {
    this.mainService.postHubSpotContacts(contact).subscribe(data => {
      console.log(data);
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
    if (this.company === '1') {
      this.contacts = this.company1;
    } else if (this.company === '2') {
      this.contacts = this.company2;
    } else {
      this.contacts = this.company3;
    }
  }

}
