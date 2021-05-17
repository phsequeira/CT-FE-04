import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import RESTy from './RESTy';

describe('RESTy', () => {
  afterEach(() => cleanup());
  
  it('renders RESTy', () => {
    render(
		<RESTy />
	);

  // checking for page title
	screen.getByText('RESTy: a Postman alternative');

  // checking for accessibility of form components
  const searchForm = screen.getByRole('form', { name: 'form' });
  const addressInput = screen.getByRole('textbox', { name: 'url-request'});
  const get = screen.getByRole('radio', { name: 'GET' });
  const post = screen.getByRole('radio', { name: 'POST' });
  const put = screen.getByRole('radio', { name: 'PUT' });
  const patch = screen.getByRole('radio', { name: 'PATCH' });
  const del = screen.getByRole('radio', { name: 'DELETE' });
  const bodyInput = screen.getByRole('textbox', { name: 'request-body' });

  // checking for presence of history list
  const historyList = screen.getByRole('list', { name: 'history' });

  // checking for presence of results area
  const resultsDisplay = screen.getByLabelText('results');
	
  });
});