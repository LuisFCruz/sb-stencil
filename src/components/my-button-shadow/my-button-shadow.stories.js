import { h } from "jsx-dom";

const appearanceOptions = ["primary", "accept", "warn", "link"];

const argTypes = {
  text: {
    type: { name: "string" },
    description: "",
    defaultValue: undefined,
    table: {
      type: { summary: "string" },
      defaultValue: { summary: undefined },
    },
  },
  appearance: {
    type: { name: "string" },
    description: "Button appearance",
    defaultValue: "primary",
    control: {
      type: "select",
      options: appearanceOptions,
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "primary" },
    },
  },
  disabled: {
    type: { name: "boolean" },
    defaultValue: false,
    description: "Disables the button",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false },
    },
    control: {
      type: "boolean",
    },
  },
};

const event = (e) => console.log(e);

export default {
  title: "Components/Button Shadow",
  component: "my-button-shadow",
  argTypes,
};

export const Simple = ({ text, appearance, disabled }) => (
  <my-button-shadow
    text={text}
    appearance={appearance}
    disabled={disabled}
    onClick={event}
  ></my-button-shadow>
);

Simple.args = { text: "Primary", disabled: false };

export const Appearance = () => (
  <div>
    {appearanceOptions.map((option) => (
      <my-button
        text={option}
        appearance={option}
        style="margin-left: 15px;"
      ></my-button>
    ))}
  </div>
);
