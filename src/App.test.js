import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the cupcake shop', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /Ble's Cupcakes/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Today's Cupcakes/i })).toBeInTheDocument();
});
