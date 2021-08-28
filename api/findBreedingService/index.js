const findBreedingServiceWorkflow=require('./findBreedingServiceWorkflow')

module.exports.run=async function(){
    return await findBreedingServiceWorkflow.workflow();
}
