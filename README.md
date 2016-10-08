# autopoco.js

[![Build Status](https://travis-ci.org/ziyasal/autopoco.js.svg?branch=master)](https://travis-ci.org/ziyasal/autopoco.js) [![Coverage Status](https://coveralls.io/repos/github/ziyasal/autopoco.js/badge.svg?branch=master)](https://coveralls.io/github/ziyasal/autopoco.js?branch=master)

**Install**

```sh
npm install autopoco.js
```

**ES6**
```js
import autopoco from 'autopoco.js'

let fixture = autopoco()

fixture.define('UserModel', {
    name:     fixture.fakes.String,
    lastName: fixture.fakes.String,
    age:      fixture.fakes.Number,
    email:    fixture.fakes.Email,
    phone:    fixture.fakes.Phone
})


let userList = fixture.for('UserModel').createMany() //creates 3 item by default

for (let user of userList) {
    console.log(JSON.stringify(user))
}
```

**CommonJS**
```js
const autopoco = require('autopoco.js')
const fixture = autopoco.default()

fixture.define('UserModel', {
    name:     fixture.fakes.String,
    lastName: fixture.fakes.String,
    age:      fixture.fakes.Number,
    email:    fixture.fakes.Email,
    phone:    fixture.fakes.Phone
})


var userList = fixture.for('UserModel').createMany() //creates 3 item by default

for (var i=0; i<userList.length; i++) {
    console.log(JSON.stringify(userList[i]))
}

```

**Browser**
```js
var fixture = autopoco()

fixture.define('UserModel', {
    name:     fixture.fakes.String,
    lastName: fixture.fakes.String,
    age:      fixture.fakes.Number,
    email:    fixture.fakes.Email,
    phone:    fixture.fakes.Phone
})


var userList = fixture.for('UserModel').createMany() //creates 3 item by default

for (var i=0; i<userList.length; i++) {
    console.log(JSON.stringify(userList[i]))
}
```
**Result (shows 1 item, omitted for brevity)**
```js
{
    "name": "2b463ab5-f790-4da6-986b-24779a5a8b5d",
    "lastName": "7c261e1f-9d68-4b0f-9040-679c0755197e",
    "age": 26,
    "email": "Kobe.Weimann69@hotmail.com",
    "phone": "766-244-0145"
}
```
