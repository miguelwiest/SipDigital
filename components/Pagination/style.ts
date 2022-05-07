import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #FFFFFF;
  border-radius: 20px;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;

  h1 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    /* or 130% */

    display: flex;
    align-items: center;
    letter-spacing: 0.2px;

    /* Neutral / Black */

    color: #25282B;
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  letter-spacing: 0.1px;
  thead {
    border-collapse: collapse;
    border-radius: 25px;
    height: 48px;
  }

  /* Neutral / Gray dark */

  color: #52575C;

  tbody {
    height: 72px;

    border-radius: 8px;

    margin: 8px 0;
  }

  td {
    span {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      letter-spacing: 0.1px;

      background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      cursor: pointer;
    }

    button {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      font-size: 8.06667px;
      line-height: 27px;
      /* or 334% */

      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;

      border: none;
      color: #FFFFFF;
      width: 139.33px;
      height: 33px;
      background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
      border-radius: 2.93333px;
      margin: 20px 0;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`

    margin: 0 10px;
  border: 1px solid #E8E8E8;
border-radius: 4px;
  font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
background: #FFFFFF;
/* identical to box height, or 123% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1px;

/* Neutral / Black */

color: #25282B;
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  :hover {
    background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
  }
`;