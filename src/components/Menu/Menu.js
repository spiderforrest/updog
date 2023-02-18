import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { API_URL } from '../../services/client.js';
import { Link } from 'react-router-dom';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to={{ pathname: `http://${API_URL}/login` }} target="_blank">
        |Login|
      </Link>
      <a href="/about">|About|</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
