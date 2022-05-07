import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 4px 0 16px rgba(16, 30, 115, 0.08);
  height: 100vh;
  width: 256px;
  position: fixed;
`;

export const Logo = styled.div`
  text-align: center;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 50.91px;
  line-height: 28px;
  /* or 56% */

  letter-spacing: 0.142241px;
  width: 100%;

  color: #52575C;
`;

export const Footer = styled.div`
  display: flex;
  align-items: end;
  height: 100%;
`;

export const Logout = styled.span`
  display: flex;
  align-items: center;
  margin-left: 36px;
  margin-bottom: 16px;

  h1 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 19.91px;
    line-height: 20px;
    /* or 100% */

    letter-spacing: 0.1px;

    cursor: pointer;
    /* Neutral / Gray dark */

    color: #52575C;
    margin-left: 15px;
  }

  h1:hover {
    background-image: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
  }
`;