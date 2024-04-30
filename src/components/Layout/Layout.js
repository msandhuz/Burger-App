import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    toggleSideDrawerHandler = () => {
        // Use functional form of setState when new state depends on the old
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    render() {
        return (
            <Wrapper>
                <Toolbar drawerToggleClicked={this.toggleSideDrawerHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.closeSideDrawerHandler} 
                />
                <main className="Main">
                    {this.props.children}
                </main>
            </Wrapper>
        );
    }
}

export default Layout;
