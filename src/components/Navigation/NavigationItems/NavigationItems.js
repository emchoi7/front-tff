import React from 'react';

// Components
import NavigationItem from './NavigationItem/NavigationItem';

//CSS
import classes from './NavigationItems.module.css';

const NavigationItems = () => {
    return (
        <nav className={["container","my-5", "p-0", "left-align", classes.NavigationItems].join(' ')}>
            <ul>
                <NavigationItem classNames="row p-0 my-2"><i class="far fa-clock"></i> Today</NavigationItem>
                <NavigationItem classNames="row p-0 my-2"><i class="far fa-calendar-alt"></i> Calendar</NavigationItem>
                <NavigationItem classNames="row p-0 my-2"><i class="fas fa-cog"></i> Settings</NavigationItem>
                <NavigationItem classNames="row p-0 my-2"><i class="fas fa-plus-circle"></i> Add Record</NavigationItem>
                <NavigationItem classNames="row p-0 my-2"><i class="fas fa-sign-out-alt"></i> Logout</NavigationItem>
            </ul>
        </nav>
    )
}

export default NavigationItems;