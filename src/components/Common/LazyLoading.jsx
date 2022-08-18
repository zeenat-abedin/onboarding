import React from 'react';

const LazyLoader = (importComp, fallback) => {
  return class extends React.Component {
    state = {
      component: null,
    };

    //loading the component and setting it to state
    componentDidMount() {
      importComp().then((comp) => this.setState({ component: comp.default }));
    }

    //rendering the component
    render() {
      const C = this.state.component;
      return C ? (
        <C {...this.props} />
      ) : fallback ? (
        fallback
      ) : (
        <div>Loading...</div>
      );
    }
  };
};
export default LazyLoader;
