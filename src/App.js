import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {
    showSideDrawer: false
  };

  // Function to toggle the side drawer
  toggleSideDrawer = () => {
    this.setState(prevState => ({
      showSideDrawer: !prevState.showSideDrawer
    }));
  };

  // Function to close the side drawer
  closeSideDrawer = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <div>
        <Layout
          drawerToggleClicked={this.toggleSideDrawer}
          sideDrawerClosed={this.closeSideDrawer}
          sideDrawerOpen={this.state.showSideDrawer}
        >
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
