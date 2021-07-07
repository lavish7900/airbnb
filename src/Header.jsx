import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import Avatar from '@material-ui/core/Avatar';
function Header() {
    return (
        <div className="header">
        <Link to="/">
        <img className="header__image" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" alt="airbnb-img"/>
            
        </Link>
            <div className="header__search">

            <input  />
            <SearchIcon />

            </div>
            <div className="header__right">
            <p>Become a host</p>
            <LanguageIcon className="icon"/>
            <Avatar className="icon"/>


            </div>

        </div>
    )
}

export default Header
