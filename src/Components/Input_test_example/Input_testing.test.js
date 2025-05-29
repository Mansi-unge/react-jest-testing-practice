// Import required functions for testing
import { render, screen } from "@testing-library/react";

// Import the component to be tested
import Input_testing from "./Input_Testing";

// Test: Check if the input element exists and has expected attributes
test("lets try test case for input", () => {
  render(<Input_testing />);

  // Get the input element using its role (textbox for <input type="text">)
  let check_input = screen.getByRole("textbox");

  // Check if input is in the document
  expect(check_input).toBeInTheDocument();

  // Check input attributes
  expect(check_input).toHaveAttribute("name", "username");
  expect(check_input).toHaveAttribute("id", "userid");
  expect(check_input).toHaveAttribute("type", "text");
  expect(check_input).toHaveAttribute("value", "mansi unge");
});

// Test: Check if the placeholder text exists in the input field
test("lets try test case for placeholder in input", () => {
  render(<Input_testing />);

  // Get input using its placeholder text
  let check_input_placeholder = screen.getByPlaceholderText("Enter user name");

  // Assert it exists
  expect(check_input_placeholder).toBeInTheDocument();
});



//  This test will fail because there's no <label> associated with the input



// test("lets try test case for label in the input", () => {
//   render(<Input_testing />);
//   let check_input_label = screen.getByLabelText("name");
//   expect(check_input_label).toBeInTheDocument();
// });

// you will need the following component for testing the label 

// <label htmlFor="userid">name</label>
// <input
//   type="text"
//   placeholder="Enter user name"
//   name="username"
//   id="userid"
//   value="mansi unge"
// />

