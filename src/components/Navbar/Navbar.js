import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from "react-redux";
import "./Navbar.css";
import { LocalConvenienceStoreTwoTone } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    tool:{
        position:"relative"
    }
  }));
function Navbar2({cart}) {
    const classes = useStyles();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
      let count = 0;
      cart.forEach((item) => {
        count += item.qty;
      });
  
      setCartCount(count);
    }, [cart, cartCount]);
  
    return (
        <div className={classes.root} >
        <AppBar  style={{color:'#023e7a'}} position="static">
          <Toolbar className={classes.tool}>
            
            <Typography variant="h6" className={classes.title}>
              <Link to='/' style={{color:'white'}}>
              ElectronicsCart
              </Link>
            </Typography>
            

            
            <Link to='/cart' style={{color:'white'}}>
            <Button color="inherit">CART<ShoppingCartIcon style={{marginLeft:'12%', marginRight:'1%'}}/><span className='cartNumber' style={{}}>{cartCount}</span></Button>
            </Link>
            

            
          </Toolbar>
        </AppBar>
      </div>
    )
}
const mapStateToProps=(state)=>{
  return {
    cart:state.cart

  }
}
export default connect(mapStateToProps)(Navbar2);
