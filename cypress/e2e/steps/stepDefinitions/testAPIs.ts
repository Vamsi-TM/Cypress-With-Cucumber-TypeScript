import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const DUMMY_API = 'https://reqres.in/api/users';

Given('I create users the response should be {string}', (stg: string) => {
  cy.request({
    method: 'POST',
    url: DUMMY_API,
    body: {
      name: 'Joe Blobbs',
      job: 'Automation Tester'
    }
  }).then((response) => {
    expect(response.status).to.eq(Number(stg));
    expect(response.body.name).to.eq('Joe Blobbs');
    expect(response.statusText).to.eq('Created');
  });
});

Given('I update users the response should be {string}', (stg: string) => {
  cy.request({
    method: 'PUT',
    url: DUMMY_API + '/2',
    body: {
      name: 'Joe Blobbs',
      job: 'Developer'
    }
  }).then((response) => {
    expect(response.status).to.eq(Number(stg));
    expect(response.body.job).to.eq('Developer');
    expect(response.statusText).to.eq('OK');
  });
});
