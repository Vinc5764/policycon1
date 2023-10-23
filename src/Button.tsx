import { ReactNode } from "react";
import ButtonStyles from "./button.module.css";

type ButtonProps = {
  children: ReactNode;
  style?: object;
  onClick?: (e: any) => void;
  disable?: boolean;
};

/**
 *
 * @param param0
 * @returns
 */

const Button = ({ children, style, onClick, disable }: ButtonProps) => {
  return disable ? (
    <button
      className={ButtonStyles.button}
      onClick={onClick}
      style={style}
      disabled
    >
      {children}
    </button>
  ) : (
    <button className={ButtonStyles.button} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
