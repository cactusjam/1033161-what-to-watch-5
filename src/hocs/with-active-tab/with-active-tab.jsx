import React, {PureComponent} from 'react';
import {TabName} from "../../constants/constants.js";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: TabName.OVERVIEW
      };
      this.handleActiveTabChange = this.handleActiveTabChange.bind(this);
    }

    handleActiveTabChange(tabName) {
      this.setState({
        activeTab: tabName,
      });
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          activeTab={activeTab}
          onActiveMovieChange={this.handleActiveTabChange}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
