import { render, screen, fireEvent } from '@testing-library/react';
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

test('Start Stopwatch successfully', () => {
  render(<App />);
  const startButton = screen.getByText(/START/i);
  const timeElement = screen.getByTestId('time');
  fireEvent.click(startButton);
  const stopButton = screen.getByText(/STOP/i);
  expect(stopButton).toBeInTheDocument();
  expect(screen.queryByText(/START/i)).toBeNull();
  expect(timeElement.TEXT_NODE).toBeGreaterThan(1);
});
