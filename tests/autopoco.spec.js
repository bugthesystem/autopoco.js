import chai from 'chai';
import sinon from 'sinon';
import AutoPoco from '../src/autopoco';

chai.should();

describe('AutoPoco', () => {
    let autopoco;

    describe('#ctor', () => {
        beforeEach(() => {
            autopoco = new AutoPoco();
        });


        it('should exists', () => {
            (!!autopoco).should.equal(true);
        });

        afterEach(()=> {

        });
    });
});
