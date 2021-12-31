import React from 'react';
import { mount } from '@cypress/react';

import LoginPage from '.';
import '../../scss/custom.scss';

it('Elementos da pagina', () => {
  mount(<LoginPage />);
  cy.get('[data-cy=logo-section]');
  cy.get('form').within(($form) => {
    cy.get('input[type="email"]').should('have.attr', 'placeholder', 'E-mail');
    cy.get('input[type="password"]').should(
      'have.attr',
      'placeholder',
      'Senha'
    );
  });
  cy.get('button').contains('Login');
  cy.get('span').contains('Não tem uma conta ?');
  cy.get('button').contains('Registre-se');
});

it('Preenchimento formulário login happypath', () => {
  mount(<LoginPage />);
  cy.get('form').within(($form) => {
    cy.get('input[type="email"]').type('teste@test.com');
    cy.get('input[type="password"]').type('123456');
    cy.get('button');
  });
});
