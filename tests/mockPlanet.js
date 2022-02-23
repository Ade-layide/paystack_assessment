const request = require("supertest")("https://swapi.dev/api");
const nock = require('nock');
const expect = require("chai").expect;
const mockplanet = require("../data/mock_data");



describe('MOCK Planet', function() {
    let myName = "Olayide I";

    before(function() {
        //mock response to look like actual response
        var mockResponse = mockplanet.mockPlanet;

        //change name property of mock Response to my name
        mockResponse.name = myName;

        //mocking response
        nock('https://swapi.dev/api').get('/planets/3').reply(200, mockResponse);

    })
   
    
    it("Mocks planet response and returns a different name value", async () => {
       //response 
       const response = await request.get("/planets/3"); 
       
       expect(response.body.name).to.equal(myName);
    })

    after(function() {
        nock.cleanAll();
       
    })
})