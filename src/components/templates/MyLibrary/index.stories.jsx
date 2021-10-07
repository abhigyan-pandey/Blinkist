import React from 'react';
import MyLibrary from '.';
import MyLibraryData from '../../organisms/MyLibrary';
import Header from '../../organisms/Header';
import Footer from '../../molecules/Footer';


const MyLibraryComponent = {
    title: "TEMPLATES/MyLibrary",
    component: MyLibrary
};

const Template = (args) => (
    <MyLibrary {...args} />
);

export const DemoMyLibraryTemp = Template.bind({});
DemoMyLibraryTemp.args = {
    header: <Header />,
    mainContent: <MyLibraryData />,
    footer: <Footer />
};

export default MyLibraryComponent;
