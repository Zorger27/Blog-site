// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("setLocalStorage", () => {
  cy.window().then(window => {
    const token = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlciBuYW1lIiwiYWRtaW4iOnRydWUsImlhdCI6MTY1ODk2MjczNiwiZXhwIjoxNjU5Mzk0NzM2fQ.zM1bFHWV2_pzrt8WCt4JXf3ffNnyUoB7843U8siQY2k"
    };
    window.localStorage.setItem("currentUser", JSON.stringify(token));
  });
});