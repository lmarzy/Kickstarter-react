import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './header';

describe('Header Component', () => {
  afterEach(cleanup);

  test('shows correct title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(getByText('React')).toBeInTheDocument();
  });
});
