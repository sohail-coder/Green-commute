import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FileUpload from '.';
import '@testing-library/jest-dom';

const handleChange = jest.fn();
const handleClick = jest.fn();

describe('File upload Component', () => {
  it('testing the component to be true', () => {
    const wrapper = render(
      <FileUpload
        open={true}
        display={true}
        success={false}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    );

    expect(wrapper).toBeTruthy();
  });
});

it('testing conditional rendering on modal', () => {
  render(
    <FileUpload
      open={false}
      success={false}
      handleChange={handleChange}
      display={true}
      handleClick={handleClick}
    />
  );
  const modal = screen.getByTestId('modal-component');
  expect(modal).not.toHaveTextContent('File Upload');
});

it('testing close button render and click functionality', () => {
  render(
    <FileUpload
      open={true}
      success={false}
      handleChange={handleChange}
      display={true}
      handleClick={handleClick}
    />
  );
  const closeButton = screen.getByTestId('close-button');
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
});

it('testing the upload functionality', () => {
  render(
    <FileUpload
      open={true}
      success={false}
      handleChange={handleChange}
      display={true}
      handleClick={handleClick}
    />
  );
  const uploadButton = screen.getByText('Click Here to Upload Files');
  expect(uploadButton).toBeInTheDocument();
  fireEvent.click(uploadButton);
  const fileInput = screen.getByTestId('file-input');
  expect(fileInput).toBeInTheDocument();
  fireEvent.change(fileInput);
  const successImage = screen.getByTestId('image');
  expect(successImage).toBeInTheDocument();
});
