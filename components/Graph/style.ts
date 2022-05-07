import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 36px;
  padding: 20px 0;
  background: #FFFFFF;
  /* card / floating */

  box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  padding: 0 20px;

  h1 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    /* identical to box height, or 130% */

    letter-spacing: 0.2px;

    /* Neutral / Black */

    color: #25282B;
  }
`;

export const Chart = styled.div`
  display: flex;
  grid-area: main;
`