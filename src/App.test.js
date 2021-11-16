import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders initial Stopwatch elements successfully', () => {
  render(<App />);
  const startButton = screen.getByText(/start/i);
  const timerElement = screen.getByText(/0/i);
  const resetButton = screen.getByText(/reset/i);
  expect(startButton).toBeInTheDocument();
  expect(timerElement).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
});
