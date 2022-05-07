import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Search = styled.div`
  padding: 10px;
  margin: 28px 0;
  background: #FFFFFF;
  border-radius: 100px;
input {
    width: 292px;
    border: none;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const UserNotification = styled.div`
 margin: 0 20px;
  p {
    position: absolute;
    top: 10px;
    right: 85px ;
    background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
/* Neutral / Background */

border: 2px solid #F6F8FB;
    border-radius: 50%;
    width: 20px;
    text-align: center;
    color: #FFFFFF;
    
  }
`;