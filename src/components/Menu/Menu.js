import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/auth/sign-in">|Sign In|</a>
      <a href="/chat">|Chat|</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
