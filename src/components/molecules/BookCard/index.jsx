import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent,CardActions, Typography,Grid,ThemeProvider, Button } from '@material-ui/core';
import { AccessTime, PersonOutline, MoreHoriz } from '@material-ui/icons';
import baseTheme from '../../../themes/theme';


const useStyles = makeStyles((theme) => ({
  root:{
    width: "18rem",
    borderRadius: "3%",
    borderBottomRightRadius: "2%",
    borderBottomLeftRadius: "2%",
    display: "grid",
    background:"rgb(250,250,250)",
  },
  image: {
    width: "inherit",
    borderRadius: "inherit",
    borderBottomRightRadius: "unset",
    borderBottomLeftRadius: "unset"
  },
  bookButton:{
    padding: theme.spacing(1),
    cursor: "pointer",
    backgroundColor:"#2ce080",
    color: "black"
  }

}));


const BookCardComponent = (props) => {
  
    const styles = useStyles();
    const { book, btnText, bookStateChange } = props;
    const changeBookStatus = (f,book)=>{
        f(book);
    };
    return (
      <ThemeProvider theme = {baseTheme}>
        <Card className={styles.root} variant="outlined">
          <img
            className={styles.image}
            src={book.imgSrc}
            title={book.name}
            alt = {book.imgAlt}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1">
                {book.name}
            </Typography>
            <Typography variant="subtitle2">
              {book.author}
            </Typography>
            <br/>
            <Grid container justifyContent="space-between" >
              <Grid item ><AccessTime fontSize="small"  style={{marginTop: -2}} />{book.readTime}</Grid>
              <Grid item><PersonOutline fontSize="small"  style={{marginTop: -2}} />{book.readCount}</Grid>
            </Grid>

          </CardContent>
          <Grid container justifyContent="space-between">
          <Grid item ><CardActions>{btnText.length > 0 && (<Button className={styles.bookButton} onClick={()=>changeBookStatus(bookStateChange, book)} variant="contained">{btnText}</Button>)}</CardActions></Grid>
            <Grid item ><MoreHoriz fontSize="small" style={{margin: "1rem"}} /></Grid>
          </Grid>

        </Card>   
      </ThemeProvider>
      );
    
  };


export default BookCardComponent;

