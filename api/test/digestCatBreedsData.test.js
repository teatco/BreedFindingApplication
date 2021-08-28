const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const digestCatBreedsData = require('../findBreedingService/digestCatBreedsData');

afterEach(() => {
  sinon.verifyAndRestore();
});

beforeEach(() => {
  sinon.verifyAndRestore();
});
describe('digestCatBreedsData', async () => {
  const returnedDigestedData = {
    dogs: [],
    children: [],
    strangers: [],
  };
  describe('digestCatBreedsData', async () => {
    it('should test the digestCatBreedsData function', async () => {
      const stub = sinon
        .stub(digestCatBreedsData, 'digest')
        .returns(returnedDigestedData);

      const data = await digestCatBreedsData.digest([]);

      expect(stub.calledOnce).to.be.true;
      expect(data).to.equal(returnedDigestedData);
    });
  });
});
