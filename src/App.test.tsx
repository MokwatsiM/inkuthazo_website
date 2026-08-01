import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero headline', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /we rise together/i })).toBeInTheDocument();
});

test('renders the primary call to action', () => {
  render(<App />);
  expect(screen.getAllByRole('link', { name: /become a member/i }).length).toBeGreaterThan(0);
});
