import React, {Component} from 'react';

// HOC
import Aux from '../Aux';

// Components
// import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
// import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
// import Column from '../../components/UI/Column/Column';

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
        this.setState({ showSideDrawer: true });
    }

    render() {
        // let sideDrawer = null;
        // if(this.state.showSideDrawer) {
        //     sideDrawer = <SideDrawer 
        //         toggleSideDrawer={this.toggleSideDrawer}
        //     />;
        // }

        return (
            <Aux>
                <main className={[classes.MainContent].join(' ')}>
                    <div className="row">
                {/* <Column
                    customClasses={["NavigationLeft"]}
                    colNum={2}
                >
                    <NavigationItems />
                </Column> */}
                {this.props.children}
                </div>
                </main>
                {/* <ToolBar 
                    handleOpenSideDrawer={this.handleOpenSideDrawer}
                />
                {sideDrawer} */}
            </Aux>
        );
    }
};

export default Layout;