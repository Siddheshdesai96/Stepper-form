import React from 'react';
import { render, screen } from '@testing-library/react';
import Stepper from './Stepper'; 

test('renders learn react link', () => {
  render(<Stepper />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
