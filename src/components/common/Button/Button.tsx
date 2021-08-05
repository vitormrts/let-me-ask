import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button.style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isOutlined = false, ...props }) => (
  <StyledButton
    type="submit"
    aria-label={props['aria-label']}
    isOutlined={isOutlined}
  >
    {props.children}
  </StyledButton>
);

export default Button;
