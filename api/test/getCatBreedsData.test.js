const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const getCatBreedsData = require('../findBreedingService/getCatBreedsData');

afterEach(() => {
  sinon.verifyAndRestore();
});

beforeEach(() => {
  sinon.verifyAndRestore();
});
describe('getCatBreedsData', async () => {
  const returnedCatData = [{}];

  describe('getCatBreedsData', async () => {
    it('should test the getCatBreedsData function', async () => {
      const stub = sinon
        .stub(getCatBreedsData, 'getCatBreedsData')
        .returns(returnedCatData);

      const data = await getCatBreedsData.getCatBreedsData();

      expect(stub.calledOnce).to.be.true;

      expect(data).to.equal(returnedCatData);
    });
  });
});
