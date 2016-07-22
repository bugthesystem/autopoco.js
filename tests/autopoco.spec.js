import chai from 'chai';
import sinon from 'sinon';
import AutoPoco from '../lib/autopoco';

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
