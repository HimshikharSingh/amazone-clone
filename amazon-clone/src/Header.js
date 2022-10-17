import React from 'react';
import './Header.css';
import amazonLogo from './amazonLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom"


function Header() {
  return (
    <div className='header'>
        <Link to="/">
        <img className="header-logo" src={amazonLogo}/>
        </Link>
        <div className='header-search'>
            <input className='header-search-input' type='text'/>
            {/* Search button*/}
            <SearchIcon className='header-searchIcon'/>
        </div>
        {/* header navigation*/}
        <div className='header-nav'>
            <div className='header-option'>
                <span className='header-optionLineOne'>Hello Guest</span>
                <span className='header-optionLineTwo'>Sign In</span>
            </div>
            <div className='header-option'>
                <span className='header-optionLineOne'>Returns</span>
                <span className='header-optionLineTwo'>& Orders</span>
            </div>
            <div className='header-option'>
                <span className='header-optionLineOne'>Your</span>
                <span className='header-optionLineTwo'>Prime</span>
                
            </div>
            <Link to='/Checkout'>
                <div className='header-optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='header-optionLineTwo header-basketCount'>0</span>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Header