import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigatioItems from '../NavigationItems/NavigationItems';
import HamburgerIcon from '../SideDrawer/HamburgerIcon/HamburgerIcon';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <HamburgerIcon clicked={props.SideDrawerToggle}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigatioItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;