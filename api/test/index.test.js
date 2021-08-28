const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const index = require('../findBreedingService/index');
const workflow = require('../findBreedingService/findBreedingServiceWorkflow');

describe('Index', async () => {
  const returnData = {
    dogs: [],
    children: [],
    strangers: [],
  };

  describe('run', function () {
    it('should run the run function', async () => {
      const stub = sinon.stub(workflow, 'workflow').returns(returnData);
      const data = await index.run();
      expect(stub.calledOnce).to.be.true;
      expect(data).to.equal(returnData);
    });
  });
});
