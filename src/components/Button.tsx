import React from "react";
import "./index.css";
import Link from "next/link";
interface Props {
  children: string;
  className?: string;
  onClick?: () => void;
  style?: object;
}

function Button({ children, className, onClick, style }: Props) {
  return (
    <div
      className={"button-container justify-center items-center" + className}
      style={style}
      onClick={onClick}
    >
      <div className="button-text">{children}</div>
    </div>
  );
}

export default Button;
