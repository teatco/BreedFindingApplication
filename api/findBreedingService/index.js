const findBreedingServiceWorkflow = require('./findBreedingServiceWorkflow');

module.exports.run = async () => {
  return await findBreedingServiceWorkflow.workflow();
};
