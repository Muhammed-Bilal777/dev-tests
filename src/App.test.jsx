import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders heading with "Reactjs"', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Reactjs/i })).toBeInTheDocument();
});
