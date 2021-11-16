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
  fireEvent.click(screen.getByText(/START/i));
  expect(screen.getByText(/STOP/i)).toBeInTheDocument();
  expect(screen.queryByText(/START/i)).toBeNull();
  expect(screen.getByTestId('time').TEXT_NODE).toBeGreaterThan(1);
});

test('Stop Stopwatch successfully', async () => {
  render(<App />);
  const STOP_AT = 2;
  fireEvent.click(screen.getByText(/START/i));
  await new Promise((resolve) => setTimeout(resolve, STOP_AT * 1000));
  fireEvent.click(screen.getByText(/STOP/i));
  expect(screen.getByTestId('time').TEXT_NODE).toBe(STOP_AT + 1);
  expect(screen.queryByText(/STOP/i)).toBeNull();
  expect(screen.queryByText(/START/i)).toBeInTheDocument();
});

