import autopoco from '../lib';

let fixture = autopoco();

fixture.define('UserModel', {
    name: fixture.fakes.String,
    lastName: fixture.fakes.String,
    age: fixture.fakes.Number,
    email: fixture.fakes.Email,
    phone: fixture.fakes.Phone
});


let userModels = fixture.for('UserModel').createMany();

for (let usermodel of userModels) {
    console.log(JSON.stringify(usermodel));
}
