import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import 'yup-phone';
import { Input, Label, ValidMessage, FormContainer, Button } from './ContactForm.styled';

Event.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
};

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone('UA', true, "Please enter a Ukrainian phone number.").required('Phone number is required'),
});



const initualValues = {
  name: '',
  number: '',
};



export const ContactForm = ({ onSubmit}) => {
  const handleSubmit = (values, { resetForm},) => {
    onSubmit(values);
    resetForm();
  };

  

  return (
    <Formik
      initialValues={initualValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContainer>
        <Label>
          Name
          <Input

            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ValidMessage name="name" component="div"/>
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ValidMessage name="number" component="div"/>
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
};
