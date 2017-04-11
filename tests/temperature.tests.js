const should = require("should");
const temperature_api = require("../Temperature-v1/index");
const get_temperature_api = require("../Daily-Temperature-by-City-v1/index");

const mocked_context = {
  bindings : {},
  log : (message) => console.log(message),
  done : () => console.log("done")
}

const mocked_request = {
  body : {
    city : "Berlin",
    temperature: 12.5,
    date: "2017-04-11",
    time: "12:00"
  }
}

const mocked_get_request = {
  params: {
    date: "2017-04-11",
    city: "Berlin"
  }
}

const mocked_temperatures = [
  {
    PartitionKey: "Berlin_2017-04-11",
    RowKey:"12:00",
    temperature:12.5
  }
]

describe("When POST temperature", () => {
  it("should bind temperature to output", () => {
    temperature_api(mocked_context, mocked_request);

    mocked_context.bindings.should.have.property("sinkTemperature");

  })

  it("should have the same city", () => {
    temperature_api(mocked_context, mocked_request);

    mocked_context.bindings.sinkTemperature.city.should.be.exactly(mocked_request.body.city);

  })

  it("should have the same temperature", () => {
    temperature_api(mocked_context, mocked_request);

    mocked_context.bindings.sinkTemperature.temperature.should.be.exactly(mocked_request.body.temperature);

  })

  it("should have the same date", () => {
    temperature_api(mocked_context, mocked_request);

    mocked_context.bindings.sinkTemperature.date.should.be.exactly(mocked_request.body.date);

  })

  it("should have the same time", () => {
    temperature_api(mocked_context, mocked_request);

    mocked_context.bindings.sinkTemperature.time.should.be.exactly(mocked_request.body.time);

  })
})

describe("When GET the temperature of Berlin", () => {
  it("should return one timestamp with 12.5 °C", () => {
    get_temperature_api(mocked_context, mocked_get_request, mocked_temperatures);

    mocked_context.res.body[0].should.have.property("temperature").with.exactly(12.5);
  })
})