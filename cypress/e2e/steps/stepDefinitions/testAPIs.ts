import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const DUMMY_API = 'https://reqres.in/api/users';

Given(
  'I create a new user with name {string} and job title {string}',
  (newUserName: string, jobTitle: string) => {
    cy.request({
      method: 'POST',
      url: DUMMY_API,
      body: {
        name: newUserName,
        job: jobTitle
      }
    })
      .then((response) => {
        expect(response.status).to.eq(201);
      })
      .as('methodCreateResponse');
  }
);

Then('the response status text should be {string}', (stg: string) => {
  if (stg == 'Created') {
    cy.get('@methodCreateResponse').should((response) => {
      expect(response).to.have.property('statusText').to.eq(stg);
    });
  } else if (stg == 'OK') {
    cy.get('@methodUpdateResponse').should((response) => {
      expect(response).to.have.property('statusText').to.eq(stg);
    });
  }
});

Then('the status code should be {string}', (statusCode: string) => {
  if (statusCode == '201') {
    cy.get('@methodCreateResponse').should((response) => {
      expect(response).to.have.property('status').to.eq(Number(statusCode));
    });
  } else if (statusCode == '200') {
    cy.get('@methodUpdateResponse').should((response) => {
      expect(response).to.have.property('status').to.eq(Number(statusCode));
    });
  }
});

Given(
  'I update the job title for {string} to {string}',
  (newUserName: string, jobTitle: string) => {
    cy.request({
      method: 'PUT',
      url: DUMMY_API + '/2',
      body: {
        name: newUserName,
        job: jobTitle
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      })
      .as('methodUpdateResponse');
  }
);

Then('the new job title should be {string}', (newJobTitle: string) => {
  cy.get('@methodUpdateResponse').should((response) => {
    expect(response).to.have.property('body').to.include({'job':newJobTitle})
  });
});
