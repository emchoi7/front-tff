import React from 'react';

// HOC
import Aux from '../../../hoc/Aux';

// Components
import NavigationItems from '../NavigationItems/NavigationItems';
import Background from '../../UI/Background/Background';
import Button from '../../UI/Button/Button';

// CSS
import classes from './SideDrawer.module.css'

const SideDrawer = (props) => {
    return (
        <Aux>
            <Background 
                onClick={props.toggleSideDrawer}
            />
            <div className={classes.SideDrawer}>
                <Button
                    onClick={props.toggleSideDrawer}
                    type="Close"
                ><i class="fas fa-times"></i></Button>
                <NavigationItems />
            </div>
        </Aux>
    );
};

export default SideDrawer;