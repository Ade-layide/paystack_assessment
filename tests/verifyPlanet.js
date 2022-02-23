const request = require("supertest")("https://swapi.dev/api");
const assert = require('assert');
const expect = require("chai").expect;
const planet = require("../data/planet");



describe('GET /planets/3', function() {
    let response;
    this.beforeAll(async () => {
        response = await request.get("/planets/3")
    });

    it('Verifiies response headers', () => {
        
        expect(response.statusCode).to.equal(200);

        expect(response.header["content-type"]).to.include("application/json");
        
        expect(response.header["vary"]).to.contain("Accept", "Cookie");

    })

    it('Verifiies the response data', () => {
       //verify that a response body is returned
        expect(response.body).exist

       //Verifies the response data using expected data stored in planetjs file
        assert.equal(response.body.name, planet.planets.name);
        assert.equal(response.body.rotation_period, planet.planets.rotation_period);
        assert.equal(response.body.orbital_period, planet.planets.orbital_period);
        assert.equal(response.body.diameter, planet.planets.diameter);
        assert.equal(response.body.climate, planet.planets.climate);
        assert.equal(response.body.gravity, planet.planets.gravity);
        assert.equal(response.body.terrain, planet.planets.terrain);
        assert.equal(response.body.surface_water, planet.planets.surface_water);
        assert.equal(response.body.population, planet.planets.population);

        
    })

  //  it('Verifiies the json schema', () {
        
  //  })

   // it('Verifiies the response time is less than 3ms', () {
        
  //  })

})