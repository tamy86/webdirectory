import React from 'react';
import { render } from '@testing-library/react';
import App from '/Users/tahmoores19/Documents/GitHub/my-app1/webdirectory/webdir/src/Container/App.css';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
