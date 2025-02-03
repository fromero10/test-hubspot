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
  company: any;
  constructor(private mainService: MainService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('companyId');
  }

  sendToHubSpot(contact: any) {
    this.mainService.postHubSpotContacts(contact).subscribe(data => {
      console.log(data);
    })
  }

}
