import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #835afd;
  cursor: pointer;
  display: flex;
`;

export const ImageWrapper = styled.div`
  background: #835afd;
  padding: 0 12px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(DefaultImage)``;

export const Room = styled.span`
  display: block;
  align-self: center;
  flex: 1;
  padding: 0 16px 0 12px;
  width: 230px;
  font-size: 14px;
  font-weight: 500;
`;
