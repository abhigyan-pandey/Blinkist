import React from 'react';
import Button from '.';
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes/theme";


const ButtonComponent = {
  title: "ATOMS/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <Button {...args} />
  </ThemeProvider>
);


export const PrimaryButtonActive = Template.bind({});
PrimaryButtonActive.args = {
  title: "Add to Library"
};

export const BookButton = Template.bind({});
BookButton.args = {
    title : 'Continue Reading'
};

export default ButtonComponent;
