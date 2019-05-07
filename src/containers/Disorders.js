import React, {Component} from 'react';
import { connect } from 'react-redux';

import DisorderCard from '../components/DisorderCard'

class Disorders extends Component {

  render(){
    return (
      <div className="App-header">
      <h1>Disorders</h1>
      {this.props.disorders.map(disorder => < DisorderCard key={disorder.id} disorder={disorder} />
      )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    disorders: state.disorders
  })
}
export default connect(mapStateToProps)(Disorders)
