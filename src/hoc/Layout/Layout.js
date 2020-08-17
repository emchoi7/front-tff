import React, {Component} from 'react';

// HOC
import Aux from '../Aux';

// Components
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';

// CSS
import classes from './Layout.module.css';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    toggleSideDrawer = () => {
        this.setState(prev => {
            return {
                showSideDrawer: !prev.showSideDrawer
            }
        });
    }

    handleOpenSideDrawer = () => {
        console.log('hi')
        this.setState({ showSideDrawer: true });
    }

    render() {
        let sideDrawer = null;
        if(this.state.showSideDrawer) {
            sideDrawer = <SideDrawer 
                toggleSideDrawer={this.toggleSideDrawer}
            />;
        }

        return (
            <Aux>
                <main>
                    {this.props.children}
                </main>
                <div className={classes.NavigationContainer}>
                    <NavigationItems />
                </div>
                <ToolBar 
                    handleOpenSideDrawer={this.handleOpenSideDrawer}
                />
                {sideDrawer}
            </Aux>
        );
    }
};

export default Layout;