import React from 'react';
import { connect } from 'react-redux';

const mapStoreStateToProps = (store) => {
  return {};
}

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillReceiveProps(props) {

  }

  componentWillMount() {

  }

  render() {
    return (
        <div>
          Home
        </div>
    );
  }
}

export default connect(mapStoreStateToProps)(Home)