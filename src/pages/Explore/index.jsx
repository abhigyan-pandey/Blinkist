import React from 'react';
import ExploreByCategory from '../../components/organisms/ExploreByCategory';
import Header from '../../components/organisms/Header';
import Footer from '../../components/molecules/Footer';
import MyLibrary from '../../components/templates/MyLibrary';
import baseTheme from '../../themes/theme';
import { ThemeProvider } from '@material-ui/styles';



const ExplorePage = () => {
    return(
        <>
        <ThemeProvider theme = {baseTheme}> 
            <MyLibrary header={<Header />} mainContent={<ExploreByCategory />} footer={<Footer />} />
        </ThemeProvider>
        </>
    );

};

export default ExplorePage;
