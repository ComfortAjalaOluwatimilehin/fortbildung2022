import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Button, IButtonProps } from "./Button";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const defaultProps: IButtonProps = {
  onClick: () => console.log("Button clicked"),
  children: "Click button",
  state: "ACTIVE",
};
const Template : ComponentStory<typeof Button> = (args) => <Button {...args}></Button>


export const ActiveButton = Template.bind({})
ActiveButton.args =  {
  onClick: () => console.log("Button clicked"),
  children: "Click button",
  state: "ACTIVE",
}



export const DisabledButton = () => {
  const [state, setState]: [any, any] = useState("ACTIVE")
  	
  const args: IButtonProps = {
    ...defaultProps,
    onClick:( ) => setState("DISABLED"),
    children: state === "DISABLED"  ? "Button is disabled": "Click to disabled",
    state
  };
  return <Button {...args}></Button>;
};

export const PrimaryButton = () => {
  const args: IButtonProps = {
    ...defaultProps,
    children: "Primary Button",
    state: "PRIMARY",
  };

  return <Button {...args}></Button>;
};
