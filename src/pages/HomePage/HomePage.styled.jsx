import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: linear-gradient(135deg, #9ad7ee, #f2f928);
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  color: #000000;
  text-align: center;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  color: #000000;
  text-align: justify;
  width: 100%;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 35px;
  padding-right: 45px;
  text-indent: 5em each-line;
`;

export const Button = styled(Link)`
  display: flex;
  width: 140px;
  height: 2px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #032b88;
  color: #f7efef;
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #0b44cd;
    // scale: 1.2;
  }
`;
export const TextKr = styled.div`
  color: #1607bc;
  margin-bottom: 55px;
  text-align: center;
  font-size: 20px;
  font-style: italic;
  font-weight: 600;
  line-height: 1.42;
  text-transform: uppercase;
  border-top: 3px solid black;
  padding-top: 15px;
`;
