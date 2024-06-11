# React Form Library

This project demonstrates a pattern for handling forms in React applications. It provides a set of example components and utilities to simplify the process of managing form state, validation, and submission.

The end goal is that once you have tweaked the example `Form` and `Input` components to fit your style system you should be able to write forms like this:

```jsx
import axios from "axios";
import { Form } from "./components/Form";
import { Input } from "./components/ValidatorInput";
import { Btn } from "./components/Button";

export default function App() {
  return (
    <Form onSubmit={(data) => axios.post("/", data)}>
      <Input name="name" label="Name" required minLength={5} />
      <Input name="email" label="Email" required type="email" />

      <Btn type="submit">Submit</Btn>
      <Btn type="reset">Reset</Btn>
    </Form>
  );
}
```

## Features

- Validation of various input types, including text, email, number, telephone, and credit card
- Built-in validation rules such as required, minimum length, maximum length, exact length, and pattern matching
- Support for custom validation functions
- Masking and formatting of input values
- Customizable error messages
- Integration with native form validation
- Easy setup and configuration

## Demo

This project provides a lightweight and flexible library for form validation in React applications. The library, located in the `formLibrary` folder, offers a set of utilities and functions to simplify the process of validating form inputs and managing form state.

The library is minimal and very approachable which makes ownership and maintenance dead simple.
By taking ownership of the library the library can grow and adapt with your project.
You are free to add or remove features as you see fit.

---

## Library Structure

The library consists of the following main files:

- `formHelper.ts`: Contains utility functions for retrieving and setting form data.
- `objectFromPathString.ts`: Provides functions for working with object paths and values.
- `validator.ts`: Implements the core validation logic and provides a set of validation functions.

These files can be imported and used in your React components to handle form validation and state management.

## Example Usage

The `components` folder contains examples of how to implement various form components that leverage the validation library. These examples demonstrate how to create custom input components, such as `Form`, `Input`, `TelephoneInput`, and `CreditCardInput`, and integrate them with the validation library.

Here's an example of how to create a custom input component using the validation library:

```jsx
import { setupValidatorInput } from '../formLibrary/validator';

function Input(props) {
  const inputRef = useRef(null);
  const errorRef = useRef(null);

  useEffect(() => {
    setupValidatorInput({
      inputElm: inputRef.current,
      errorElm: errorRef.current,
      ...props,
    });
  }, []);

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input ref={inputRef} name={props.name} type={props.type} />
      <div ref={errorRef} className="error-message" />
    </>
  );
}
```

In this example, the `Input` component uses the `setupValidatorInput` function from the validation library to set up the validation for the input field. The validation options and error handling are configured using the `props` passed to the component.

---

## Motivation

When building React applications, handling forms can become complex and repetitive. This project aims to provide a streamlined approach to form management, focusing on a pattern that differs from popular libraries like react-hook-form.

## Approach

The main idea behind this form library is to leverage the power of React's component-based architecture and the native form validation API. Instead of relying heavily on hooks and external state management, this library utilizes a more declarative approach.

Key aspects of the approach:

- Form state is managed by leveraging built in browser features.
- Validation is performed using a combination of native form validation attributes and custom validation functions.
- Error handling is completely customizeable, but this demo shows how its done by displaying error messages below each input field.
- Form submission is handled by a submit handler function that receives the form data after the form validation.

## Comparison with react-hook-form

While react-hook-form is a popular choice for form management in React, it takes a different approach compared to this library.

react-hook-form:
- Relies heavily on hooks for form state management and validation.
- Requires explicit registration of form fields using the `register` function.
- Provides a `handleSubmit` function that wraps the form submission logic.
- Offers a more imperative API for form control and validation.

This library:
- Utilizes React's component-based architecture for form structure.
- Leverages native form validation attributes and custom validation functions.
- Handles form submission through a simple submit handler function.
- Provides a more declarative API, where form fields and validation rules are defined within the JSX.

## Example Components

The library includes the following main components:

- `Form`: The main form component that wraps the input fields and handles form submission.
- `Input`: A generic input component that supports various types and validation rules.
- `TelephoneInput`: An input component specifically designed for telephone numbers.
- `CreditCardInput`: An input component for validating credit card numbers.

These example components show how the form library integrates into your React application to build forms with validation and error handling.

## Example Usage

```jsx
import { Form, Input, TelephoneInput, CreditCardInput } from './components';

function App() {
  const handleSubmit = (data) => {
    // Handle form submission logic
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" label="Name" required minLength={5} />
      <Input name="email" label="Email" required type="email" />
      <TelephoneInput name="phone" label="Phone" required />
      <CreditCardInput name="creditCard" label="Credit Card" required />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

## Conclusion

This React Form Library provides a straightforward and declarative approach to form management in React applications. By leveraging React's component-based architecture and native form validation, it offers a clean and intuitive way to handle form state, validation, and submission.

While it may not have all the bells and whistles of more complex form libraries, it serves as a solid foundation for building forms in React and can be extended and customized to fit specific project requirements.

## Utilities

- `getFormData`: A function that retrieves the form data as an object.
- `setFormData`: A function that sets the form data based on an object.

