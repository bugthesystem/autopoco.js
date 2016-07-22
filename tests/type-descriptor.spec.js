import chai from 'chai';
import sinon from 'sinon';
import TypeDescriptor from '../lib/type-descriptor';

chai.should();

describe('TypeDescriptor', () => {
    let typeDescriptor;
    describe('#ctor', () => {
        beforeEach(() => {
            typeDescriptor = new TypeDescriptor();
        });

        it('should exists', () => {
            (!!typeDescriptor).should.equal(true);
        });

        it('should define describe method', ()=> {
            (!!typeDescriptor.describe).should.equal(true);
        });

        it('should return `string` when type is String', ()=> {
            typeDescriptor.describe(String).should.equal('string');
        });

        it('should return `number` when type is Number', ()=> {
            typeDescriptor.describe(Number).should.equal('number');
        });

        it('should return `object` when type is json', ()=> {
            typeDescriptor.describe({a: '', b: ''}).should.equal('object');
        });

        it('should throw `Error` when type is undefined', ()=> {
            (()=> {
                typeDescriptor.describe(undefined)
            }).should.throw(Error, '`type` should not be null or undefined.');
        });

        it('should throw `Error` when type is null', ()=> {
            (()=> {
                typeDescriptor.describe(null)
            }).should.throw(Error, '`type` should not be null or undefined.');
        });

        afterEach(()=> {

        });
    });
});
