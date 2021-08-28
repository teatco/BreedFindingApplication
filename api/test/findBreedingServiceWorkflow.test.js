const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const workflow = require('../findBreedingService/findBreedingServiceWorkflow');
const getCatBreedsData = require('../findBreedingService/getCatBreedsData');
const digestCatBreedsData = require('../findBreedingService/digestCatBreedsData');

describe('findBreedingServiceWorkflow', async () => {
  const returnedDigestedData = {
    dogs: [],
    children: [],
    strangers: [],
  };

  const returnedCatData = [{}];

  describe('workflow', async () => {
    it('should test the workflow function', async () => {
      const stub1 = sinon
        .stub(getCatBreedsData, 'getCatBreedsData')
        .returns(returnedCatData);
      const stub2 = sinon
        .stub(digestCatBreedsData, 'digest')
        .returns(returnedDigestedData);

      const data = await workflow.workflow();

      expect(stub1.calledOnce).to.be.true;
      expect(stub2.calledOnce).to.be.true;
      expect(data).to.equal(returnedDigestedData);
    });
  });
});
