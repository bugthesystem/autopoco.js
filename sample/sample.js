import autopoco from '../lib';

let fixture = autopoco();

fixture.define('UserModel', {
    name: fixture.fakes.String,
    lastName: fixture.fakes.String,
    age: fixture.fakes.Number,
    email: fixture.fakes.Email,
    phone: fixture.fakes.Phone
});


let userModels = fixture.for('UserModel').createMany(3);

for (let model of userModels) {
    console.log(JSON.stringify(model));
}
