import React from 'react';
import { mount } from '@cypress/react';
import PageTemplate from '../../components/pageTemplate';
import { SideMenuContextProvider } from '../../context/sidemenuContext';
import '../../scss/custom.scss';
import HomePage from './index';

it('test', () => {
  mount(
    <SideMenuContextProvider>
      <PageTemplate>
        <HomePage />
      </PageTemplate>
    </SideMenuContextProvider>
  );
  cy.get('h2').contains('Home Page');
});
