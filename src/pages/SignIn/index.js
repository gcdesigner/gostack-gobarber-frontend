import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';

import InputPassword from '~/components/InputPassword';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <InputPassword name="password" placeholder="Password" />
        <button className="btn" type="submit">
          {loading ? 'Loading..' : 'Login'}
        </button>
        <Link to="/register">Create new free account!</Link>
      </Form>
    </>
  );
}
