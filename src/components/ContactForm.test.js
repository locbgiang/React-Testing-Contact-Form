import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('all the texts are appearing', () => {
    const {getByText} = render(<ContactForm />);

    const firstNameText = getByText(/first name*/i);
    const lastNameText = getByText(/last name*/i);
    const emailText = getByText(/email*/i);
    const messageText = getByText(/message/i);

    expect(firstNameText).toBeVisible();
    expect(lastNameText).toBeVisible();
    expect(emailText).toBeVisible();
    expect(messageText).toBeVisible();
})

test('inputs are visible', () => {
    const { getByLabelText } = render (<ContactForm />);

    getByLabelText(/first name/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});

test('adding new person to the list', () => {
    const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {target: {value: 'Loc'}});
    fireEvent.change(lastNameInput, {target: {value: 'Giang'}});
    fireEvent.change(emailInput, {target: {value: 'locbgiang@gmail.com'}});
    fireEvent.change(messageInput, {target: {value: 'Hi everybody'}});

    expect(firstNameInput.value).toBe('Loc');
    expect(lastNameInput.value).toBe('Giang');
    expect(emailInput.value).toBe('locbgiang@gmail.com');
    expect(messageInput.value).toBe('Hi everybody');
})