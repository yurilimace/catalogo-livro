import React from 'react';
import { mount } from '@cypress/react';
import PageTemplate from './components/pageTemplate';
import { SideMenuContextProvider } from './context/sidemenuContext';
import './scss/custom.scss';
import HomePage from './pages/home';

it('renders learn react link', () => {
  mount(
    <SideMenuContextProvider>
      <PageTemplate>
        <HomePage />
      </PageTemplate>
    </SideMenuContextProvider>
  );
  cy.get('[data-cy=sidemenuController]').click();
});
