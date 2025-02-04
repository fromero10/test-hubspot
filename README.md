# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Node

The node version used for this project to run smoothly was version v16.20.2

## Functionalities

The main page is displaying a list of three companies (that are hardcoded into the front-end)
Inside of the view of each company, you can see a list of contacts, by criteria, located on the mock API. Contacts in company 1 are contacts created less than three days ago, contacts in company 2 are contacts created between 4 and 7 days ago and contacts in company 3 are contacts created before that.

On the Company view you can see the list of contacts associated to the view and have the chance to send the contacts to HubSpot. This is going to connect to a backend hosted locally in node.js and execute the functions described on the README, but what the function does, is create the company in HubSpot, create the contact, create a deal, and associate all three of them together.

We also have a create new contact which connects to the locally served backend who connects with the mock API to create a contact. The response is not showed completely because it doesn't look so good, but the alert received when the contact is created has three properties returned on the response.



