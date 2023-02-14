import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 130px;
  text-align: left;
  padding: 1.8rem 0rem 0rem 0rem;
  box-sizing: border-box;
  border-right: solid black 2px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 0.3rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.291);

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: rgb(49, 49, 49);
      background-color: rgba(108, 108, 203, 0.5);
    }
  }
`;
