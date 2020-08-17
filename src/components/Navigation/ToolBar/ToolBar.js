import React from 'react';

// Components
import Button from '../../UI/Button/Button';

//CSS
import classes from './ToolBar.module.css';

const toolBar = (props) => {
    return (
        <menu className={classes.ToolBar}>
            <Button 
                onClick={props.handleOpenSideDrawer}
                type="MobileMenu"
            ><i class="fas fa-bars"></i></Button>
        </menu>
    );
};

export default toolBar;