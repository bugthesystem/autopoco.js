import faker from 'faker';
import uuidFactory from 'node-uuid'

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
                
                if (method === 'random.number'){
                    tmp[key] = parseInt(faker.random.number())
                }
                if (method === 'random.uuid') //HACK: next version of faker will fix this
                    tmp[key] = uuidFactory.v4()
                else{
                    tmp[key] = faker.fake('{{' + method + '}}');;
                }
            }
            result.push(tmp);
        }

        return result;
    }
}