
This is a simple regression test suite for an API

### How to setup and run the test suite

- npm or yarn is required to install packages in this application.

``` bash
git clone https://github.com/Ade-layide/paystack_assessment.git
```
``` bash
cd paystack_assessment
```
``` bash
yarn 
```
OR
``` bash
npm install
```

Then fnally,
``` bash
npm run test
```

#### Packages used
- mocha (Testing frmaework)
- chai (Test library)
- chai-json-schema (for verification of json schema)
- perf_hooks (for validation of time)
- supertest (for http calls to the server) 
- nock (to mock API requests)

### Schema

- The test data schema can be found under the data folder