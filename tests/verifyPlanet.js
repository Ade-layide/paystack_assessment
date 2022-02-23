const request = require("supertest")("https://swapi.dev/api");
const assert = require('assert');
const chai = require('chai');
const expect = require("chai").expect;
const planet = require("../data/planet");
const { performance } = require("perf_hooks");
const schema = require("../data/schema");


chai.use(require('chai-json-schema'));


describe('GET Planet', function() {
    let response;
    this.beforeAll(async () => {
        
        response = await request.get("/planets/3");
        
    });

    it('Verifiies response headers', () => {
   
        expect(response.statusCode).to.equal(200);

        expect(response.header["content-type"]).to.include("application/json");
        
        expect(response.header["vary"]).to.include('Accept');
       
    })

    it('Verifiies the response data', () => {
       //verify that a response body is returned and is an object
        expect(response.body).exist;

       //Verifies the response data using expected data in planet file
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

    it('Verifiies the json schema', () => {
        expect(response.body).exist
        expect(response.body).to.be.jsonSchema(schema.planetSchema)
    })

    it('Verifiies the response time is less than 3ms', async () => {
        const start = performance.now();
    
        await request.get("/planets/3");

        expect(performance.now() - start).to.be.lessThan(3000);

        if (performance.now() - start > 3000) {
        console.log("Response time exceeded 3ms");
        }
    })

      

    it('Verifiies that 405 status code is returned for a POST method', async () => {
        const payload = {
            name: "Automated testing",
            Completed: true,
          };
         response = await request.post("/planets/3", payload);
         expect(response.statusCode).to.equal(405);
    })

})