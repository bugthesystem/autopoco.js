import faker from 'faker';

export default class PocoFactory {
    constructor() {
        this.__registry = {};
    }

    create(schema) {
        return this.createMany(schema, 1)[0];
    }

    createMany(schema, count) {
        var result = [];

        for (var i = 0; i < count; i++) {
            var tmp = {};
            for (var key in schema) {
                var method = schema[key];
                var fake = faker.fake('{{' + method + '}}');
                if (method === 'random.number')
                    tmp[key] = parseInt(fake);
                else
                    tmp[key] = fake;
            }
            result.push(tmp);
        }

        return result;
    }
}