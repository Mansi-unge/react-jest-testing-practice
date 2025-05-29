// Import necessary functions from React Testing Library
import { render, screen } from "@testing-library/react";

// Import the component to be tested
import Text_check from "./Text_check";

// Test case to check for specific text and image title in the component
test("Test first to check the text in my react app", () => {
  // Render the Text_check component
  render(<Text_check />);

  // Find the text element using a case-insensitive regex
  const text = screen.getByText(/hello! this is my first react test application/i);

  // Find the image element by its title using a case-insensitive regex
  const title = screen.getByTitle(/jest_logo/i);

  // Assert that the text is present in the document
  expect(text).toBeInTheDocument();

  // Assert that the image with the specified title is present
  expect(title).toBeInTheDocument();
});