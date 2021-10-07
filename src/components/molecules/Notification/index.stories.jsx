import React from 'react';
import Notification from '.';

const NotificationComponent = {
    title: "MOLECULES/Notification",
    component: Notification
};

const Template = (args) => (
    <Notification {...args} />
);

export const ExampleNotification = Template.bind({})
ExampleNotification.args={

};

export default NotificationComponent;
