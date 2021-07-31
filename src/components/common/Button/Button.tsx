import React, { ButtonHTMLAttributes } from 'react';

import './Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isOutlined = false, ...props }) => (
  <button
    type="submit"
    aria-label={props['aria-label']}
    className={`button ${isOutlined && 'outlined'}`}
  >
    {props.children}
  </button>
);

export default Button;
