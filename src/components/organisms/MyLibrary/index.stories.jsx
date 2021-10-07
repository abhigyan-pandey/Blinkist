import React from 'react';
import MyLibraryBookEvent from '.';

const MyLibraryBookEventComponent = {
    title : "ORGANISMS/MyLibrabryData",
    component: MyLibraryBookEvent
};

const Template = () => {
    <MyLibraryBookEvent />;
};

export const DemoData = Template.bind({});
DemoData.args = {};

export default MyLibraryBookEventComponent;