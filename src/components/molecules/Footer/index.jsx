import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import logo from '../../../assets/images/blinkist_logo.png';
import {Facebook, Twitter, Instagram, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    root : {},
    footer_main:{
        backgroundColor:"#ecf2fb",
    },
    footer_container:{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]:{
            display: "block",
        }
        
    },
    footer_logo:{
        height: "2rem",
        marginBottom:"1rem"

    },
    footer_left:{
        marginRight:"4rem",
        [theme.breakpoints.down('sm')]:{
            marginBottom: "2rem",
            borderBottom: "1px solid black"
        }
        
    },
    footer_right:{
        marginRight:"5rem"
    },
    footer_links:{
        marginBottom: "1rem",
        color: "#6D787E"
    },
    h5_color:{
        color: "#0365F2",
        fontSize: "1.5rem",
        fontWeight:"700",
        lineHeight: "1.33"
    },
    footer_bottom:{
        display: "flex",
        padding: "2rem",

    },
    footer_icons:{
        marginLeft:"auto",
        marginRight:"auto",        

    },
    footer_bottom_text:{
        marginLeft:"auto",
        color: "#6D787E"
    },
    social_icons:{
        background: "lightgray",
        padding: "4px",
        borderRadius:"1rem",
        marginRight:"0.5rem"
    },
    footer_link_head:{
        marginBottom: "1rem",
        fontWeight: "700"
    }


}));

const FooterComponent = (props)=>{
    const styles = useStyles();
    return(
        <footer className={styles.footer_main}>
            <Box className={styles.footer_container}>
                <div className={styles.footer_left}>
                    <img src={logo} className={styles.footer_logo} />
                    <Typography variant="h5" className={styles.h5_color}>Big ideas in small packages</Typography>
                    <Typography variant="h5" className={styles.h5_color}>Start learning now</Typography>
                </div>
                <div className={styles.footer_right}>
                    <Typography className={styles.footer_link_head} variant="subtitle1">Editorial</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">Book lists</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">What is Nonfiction?</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">What to Read Next</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">Benefits of Reading</Typography>
                </div>
                <div className={styles.footer_right}>
                    <Typography className={styles.footer_link_head} variant="subtitle1">Useful Links</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">Pricing</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">Blinkist Business</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">Gift Cards</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">Blinkist Magazine</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">Contact &amp; Help</Typography>
                </div>
                <div className={styles.footer_right}>
                    <Typography className={styles.footer_link_head} variant="subtitle1">Company</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">About</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">Careers</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">Partners</Typography>
                    <Typography className={styles.footer_links} variant="subtitle2">Code of Conduct</Typography>
                </div>
            </Box>
                <div className={styles.footer_bottom}>
                    <div className={styles.footer_bottom_text}>
                        © Blinkist 2021 | Sitemap Imprint | Terms of Service | Privacy Policies
                    </div>
                        <div className={styles.footer_icons}>
                            <Facebook className={styles.social_icons} /> <Twitter className={styles.social_icons} /><LinkedIn className={styles.social_icons} /><Instagram className={styles.social_icons} />
                        </div>
                </div>
        </footer>
    );

};


export default FooterComponent;