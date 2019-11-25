import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signUpRequest } from '~/store/modules/auth/actions';

import InputPassword from '~/components/InputPassword';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, '6 characters minimum')
    .required('Password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your best email" />
        <InputPassword name="password" placeholder="Password" />

        <button className="btn" type="submit">
          Register
        </button>
        <Link to="/">I already have an account!</Link>
      </Form>
    </>
  );
}
