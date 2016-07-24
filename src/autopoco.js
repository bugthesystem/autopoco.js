'use strict'

import {DEFAULT_COUNT} from './constants';
import PocoFactory from './poco-factory';

export default class AutoPoco {
    constructor() {
        this.__registry = {};
        this.__currentType = '';
        this.pocoFactory = new PocoFactory();
    }

    add(name, schema) {
        this.__registry[name] = {
            schema: schema
        };
    }

    for(type) {
        this.__currentType = type;
        return this;
    }

    createMany(count) {
        return this.pocoFactory.createMany(this.__registry[this.__currentType], count ? count : DEFAULT_COUNT)
    }

    create() {
        return this.createMany(1)[0];
    }

    define(name, schema) {
        this.__registry[name] = schema;
    }

    get fakes() {
        return {
            Email: 'internet.email',
            Uri: 'internet.url',
            Phone: 'phone.phoneNumber',
            Number: 'random.number',
            String: 'random.uuid'
        }
    }
}