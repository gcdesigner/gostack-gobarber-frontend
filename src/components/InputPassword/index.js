import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import { MdLockOutline, MdLockOpen } from 'react-icons/md';

import { Container } from './styles';

export default function InputPassword({ name, placeholder }) {
  const [showPass, setShowPass] = useState(false);

  function handleShowPass() {
    setShowPass(!showPass);
  }

  return (
    <Container>
      <Input
        name={name}
        type={showPass ? 'text' : 'password'}
        placeholder={placeholder}
      />
      <button type="button" onClick={handleShowPass}>
        {showPass ? (
          <MdLockOpen size={18} color="#fff" />
        ) : (
          <MdLockOutline size={18} color="#fff" />
        )}
      </button>
    </Container>
  );
}

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
