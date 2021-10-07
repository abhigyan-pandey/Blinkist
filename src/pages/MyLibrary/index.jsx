import React from 'react';
import MyLibraryData from '../../components/organisms/MyLibrary';
import Header from '../../components/organisms/Header';
import Footer from '../../components/molecules/Footer';
import MyLibrary from '../../components/templates/MyLibrary';
import baseTheme from '../../themes/theme';
import { ThemeProvider } from '@material-ui/styles';


const MyLibraryPage = () => {
    return(
        <>
            <ThemeProvider theme={baseTheme}>
                <MyLibrary header={<Header />} mainContent={<MyLibraryData />} footer={<Footer />} />
            </ThemeProvider>
        </>
    );

};

export default MyLibraryPage;
