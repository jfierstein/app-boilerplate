import React from 'react';
import { connect } from 'react-redux';

import {
  Container, Row, Col
} from 'reactstrap';

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
      <Container>
        <Row>
          <Col xs="auto" style={{marginLeft:'auto', marginRight: 'auto', textAlign: 'center'}}>
            Home
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStoreStateToProps)(Home)