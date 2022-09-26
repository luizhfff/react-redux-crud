# React App - CRUD Operations

## Description
- This is a user interfacing app implementing CRUD operations and demonstrating the following tools/concepts:
  - React Router
  - Redux with RxJS
  - Mobile-first (Responsive)
  - Material UI

## Instructions
- This frontend application relies on a backend running on ```http://localhost:3001``` with the following main routes:
  - Companies:
    - GET: ```/companies```
    - GET: ```/companies/{id}```
    - GET: ```/companies/{companyId}/people```
    - POST: ```/companies```
    - PUT: ```/companies/{id}```
  - People:
    - GET: ```/person/{id}```
    - GET: ```/companies/{companyId}/people```
    - POST: ```/person```
    - PUT: ```/person/{personId}```
    - DELETE: ```/person/{personId}```

## The app includes the following operations:
- Show a list of companies ```/companies```
- Show the details/full record of an existing company ```/companies/id```
- Create a new company ```/companies/create```
- Show a list of people who work at a given company ```/companies/{id}/people```
- Show the details for a specific person ```/people/{person_id}```
- Create a new person, associating them to an existing company ```/people/create```
- Edit an existing company's record ```/companies/{id}/edit```
- Edit a person's record ```/people/{person_id}/edit```
- Delete a person record ```/people/{person_id}```
