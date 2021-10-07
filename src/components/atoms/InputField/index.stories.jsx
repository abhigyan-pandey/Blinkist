import React from "react";
import InputField from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes/theme";

const InputFieldComponent = {
  title: "ATOMS/InputFields",
  component: InputField,
  argTypes: { onChange: { action: "changed" }, onBlur: { action: "blurred" } },
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <InputField {...args} />
  </ThemeProvider>
);

export const EmptyTextField = Template.bind({});
EmptyTextField.args = {
  label: "Empty Label",
};

export const FilledTextField = Template.bind({});
FilledTextField.args = {
  label: "Filled Label",
  value: "Pre filled value",
};

export const RequiredTextField = Template.bind({});
RequiredTextField.args = {
  label: "Required Label",
  required: true,
};

export const EmptyErrorTextField = Template.bind({});
EmptyErrorTextField.args = {
  label: "Empty Error Label",
  error: true,
};

export const ErrorMessageTextField = Template.bind({});
ErrorMessageTextField.args = {
  label: "Error Message Label",
  error: true,
  errorMessage: "This is an error",
};

export default InputFieldComponent;
