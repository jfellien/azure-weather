module.exports = (context, req, sourceTemperatures) => {
    
    context.res = {
        body: sourceTemperatures
    };
    
    context.done();
};