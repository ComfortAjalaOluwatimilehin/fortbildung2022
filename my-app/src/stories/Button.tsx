import React from "react";
import "../styles/buttons.css";
export type TButtonState = "ACTIVE" | "DISABLED" | "PRIMARY"
export interface IButtonProps {
  state: TButtonState;
  onClick: () => any;
  children?:any;
}

export const Button: React.FC<IButtonProps> = ({
  state,
  onClick,
  children
}) => {

  return (
    <button
      disabled={state ==="DISABLED"}
      className={`story-button button-${state.toLowerCase()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
