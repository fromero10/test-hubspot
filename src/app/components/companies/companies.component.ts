import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.companies = [{
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

  }

  goToContacts(company: any) {
    this.router.navigate([`contacts/${company.id}`]);
  }

}
