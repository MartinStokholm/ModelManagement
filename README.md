# ModelManagement

## Base functionality

## Everyone can do the following:

### Login

A user can login as either manager or model type.
Login can be called without any jwt-acces token and returns a jwt-token on succesfull login.
This must be passed along to all other api calls

### Logout

localStorage.RemoveItem(token)

## Manager types can do the following:

### Create a new Model

Model has the following fields:

```
"firstName": "string",
"lastName": "string",
"email": "string",
"phoneNo": "string",
"addresLine1": "string",
"addresLine2": "string",
"zip": "string",
"city": "string",
"country": "string",
"birthDate": "2022-12-01T17:08:56.476Z",
"nationality": "string",
"height": 0,
"shoeSize": 0,
"hairColor": "string",
"eyeColor": "string",
"comments": "string",
"password": "string"
```

### Create a new Manager

URL: localhost:7181/api/managers

METHOD: POST

Mangager has the following fields:

```
"firstName": "string",
"lastName": "string",
"email": "string",
"password": "string"
```

### Create a new Job

URL: localhost:7181/api/jobs

METHOD: POST

Job has the following fields:

```
"customer": "string",
"startDate": "2022-12-01T17:10:49.659Z",
"days": 0,
"location": "string",
"comments": "string"
```

### Add model to a job

URL: localhost:7181/api/jobs{jobId}/model/{modelid}

METHOD: POST

### Remove model from a job

URL: localhost:7181/api/jobs{jobId}/model/{modelid}

METHOD: DELETE

### Get list of all jobs

URL: localhost:7181/api/jobs

METHOD: GET

## Model types can do the following:

### Create new expense for a job

URL: localhost:7181/api/expenses

METHOD: POST

Expense has the following fields

```
"modelId": 0,
"jobId": 0,
"date": "2022-12-01T17:11:08.328Z",
"text": "string",
"amount": 0
```

### Get list of jobs related to model that is logged in

URL: localhost:7181/api/jobs

METHOD: GET
