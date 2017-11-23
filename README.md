# wCalendar
REST API - build a working schedule

### Technologies
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Mongodb](https://www.mongodb.com/)
* [Mongoose](http://mongoosejs.com/)
* [Docker](docker.com)

### Getting Started

```sh
$ docker-compose up
```

### Requests example

##### POST http://localhost:3000/api/calendar
Request:
```javascript
{
	"userId": "1",
	"timeStart": 1511468000,
	"timeEnd": 1511900000,
	"hours": 6,
	"status": "away",
	"note": ""
}
```

Response:
```javascript
{
	"status": 200,
	"data": {
		"__v": 0,
		"updatedAt": "2017-11-23T19:24:27.610Z",
		"createdAt": "2017-11-23T19:24:27.610Z",
		"userId": "2",
		"timeStart": "2018-11-05T17:00:00.000Z",
		"timeEnd": "2017-11-28T17:00:00.000Z",
		"status": "away",
		"note": "",
		"_id": "5a17206bb7763f6017cf9ed1",
		"hours": 6
	}
}
```