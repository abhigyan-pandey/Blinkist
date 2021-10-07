import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper , Typography, Grid} from '@material-ui/core';
import store_icons from '../../../assets/images/store_icons.jpg';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
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
        }
      }
}));

const Notification = () => {
    const styles = useStyles();
    return (
        <div className={styles.paper}>
        <Paper variant="outlined" >
            <Grid container>
                <Grid item xs={6} md={6}>
                        <Typography variant="subtitle2" gutterBottom className={styles.paperTitle} align="left"  >New </Typography>
                        <Typography variant="subtitle1" gutterBottom  className={styles.paperSubtitle}  align="left" >Find audiobooks on the blinkist app</Typography>
                        <Typography variant="subtitle2" align="left"    >
                                With the premium you'll get the whole Blinkist library for free, plus full-length nonfiction audiobooks at a special member price.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                            <img src={store_icons} height="125" width="150" />
                    </Grid>
            </Grid>
        </Paper>
    </div>
    );
};


export default Notification;
