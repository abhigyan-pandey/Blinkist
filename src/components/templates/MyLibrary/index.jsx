import React from 'react';
import { makeStyles, Box, Grid, Container, Typography, Button } from '@material-ui/core';
import Notification from '../../molecules/Notification';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
      },
    header: {
        marginBottom: '4rem'
    },
    paperTitle:{
        color: "red"
    },
    paperSubtitle:{
        fontWeight: "bold"
    },
    paper: {
        textAlign:"center",
        '& > *': {
          backgroundColor: "#ecf2fb",
          padding: theme.spacing(1),
          height: theme.spacing(16),
          width: "fit-content"
        },
      },
    btn:{
        color:"limegreen"
    },
    heading:{
        marginBottom: "2rem",
        marginTop: "6rem",
        color :'#03314B'
    }

}));

const MyLibraryComponent = (props)=>{
    const styles = useStyles();
    const {header, mainContent, footer} = props;
    return(  
        <> 
            <Container maxWidth="md">
                <Box className={styles.header} >
                    {header}
                </Box>
                <Typography className={styles.heading} variant="h4">My Library</Typography>
                <br/>
                <Notification />
                <br/>
                {mainContent}
                <br />
                <Grid container justifyContent="center"><Button variant="outlined" className={styles.btn}>Load More</Button></Grid>
                <br />
            </Container>
            <div>
                {footer}
            </div>
        </>
    );

};


export default MyLibraryComponent;