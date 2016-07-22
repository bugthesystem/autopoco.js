export default class TypeDescriptor {

    describe(type) {
        if (!type) {
            throw new Error('`type` should not be null or undefined.');
        }

        let __type = typeof type, typeName;

        if (__type === 'function') {
            typeName = type.prototype.constructor.name;
        }
        else {
            return __type;
        }

        return typeName.toLowerCase();
    }
}