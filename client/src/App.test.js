import { render, screen } from '@testing-library/react';
import App from './components/App';
import About from "./components/about/About";

test('renders learn react link', () => {
  render(<About />);
  const linkElement = screen.getByText(/But behold this creation/i);
  expect(linkElement).toBeInTheDocument();
});
