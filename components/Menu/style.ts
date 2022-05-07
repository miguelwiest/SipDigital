import styled from 'styled-components';

export const MenuLinks = styled.div`
  display: flex;
  margin: 15px 36px;

  a {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 19.9138px;
    line-height: 28px;
    /* identical to box height, or 143% */

    letter-spacing: 0.142241px;
cursor: pointer;
    color: #52575C;
  }
  a:hover {
    background-image: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
  }
`;