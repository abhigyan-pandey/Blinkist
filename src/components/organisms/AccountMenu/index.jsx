import React ,{useState} from 'react';
import { Link,IconButton }  from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
      fontSize:'1.2rem',
      color:'#03314B',
      fontWeight:'bold',
      '&:hover':{
        borderBottom:'3px solid #22C870',
        textDecoration:'underline'
      }
  },
});


const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Link className={classes.root} color="primary" aria-controls="account-menu" aria-haspopup="true" onClick={handleClick}>
        Account
        <ExpandMoreIcon  />
      </Link>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem sx={{fontFamily:'inherit'}} onClick={handleClose}>Invite Friends</MenuItem>
        <MenuItem sx={{fontFamily:'inherit'}} onClick={handleClose}>Whishlist</MenuItem>
        <MenuItem sx={{fontFamily:'inherit'}} onClick={handleClose}>Settings</MenuItem>
        <MenuItem sx={{fontFamily:'inherit'}} onClick={handleClose}>Help &amp; Support</MenuItem>
        <MenuItem sx={{fontFamily:'inherit'}} onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};


export default AccountMenu;