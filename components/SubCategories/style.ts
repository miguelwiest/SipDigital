import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  grid-gap: 30px;
`;

export const Card = styled.div`
  display: flex;
  background: #FFFFFF;
  padding: 20px 24px;
  /* card / floating */

  box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
  border-radius: 8px;
`;
export const CardContent = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const CardTitle = styled.h1`
  
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;

  /* Neutral / Black */

  color: #25282B;
`;
export const CardSubtitle = styled.strong`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;

  background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;