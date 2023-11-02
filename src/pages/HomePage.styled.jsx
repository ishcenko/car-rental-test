import styled from '@emotion/styled';
// import Image from '../image/HomeImg/hamer.jpg';
// import Image from '../image/HomeImg/hamer2xhome.jpg';
// import Image from '../image/HomeImg/hamer3xhome.jpg';
// import Image from '../image/HomeImg/hamer4xhome.jpg';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(90deg, #9ad7ee, #f2f928);
`;

export const Title = styled.h1`
  display: flex;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  color: #000000;
  text-align: center;
  /* width: 460px; */
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  display: flex;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  color: #000000;
  text-align: center;
  width: 100%;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  width: 360px;
`;

export const Button = styled(Link)`
  display: flex;
  width: 140px;
  height: 2px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
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
    background-color: #021a53;
    scale: 1.2;
  }
`;
