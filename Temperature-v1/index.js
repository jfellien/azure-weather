const assert = require("assert");

module.exports = (context, req) => {
    
    assert.ok(req.body);
    assert.ok(req.body.city);
    assert.ok(req.body.temperature);
    assert.ok(req.body.date);
    assert.ok(req.body.time);

    context.bindings.sinkTemperature = req.body;

    context.log(`Temperature in ${ req.body.city } at ${ req.body.time }: ${ req.body.temperature }`);
    
    context.res = {
        body: `Temperature stored`
    };

    context.done();
};