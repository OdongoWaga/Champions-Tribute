import React, { Component } from 'react'
import {firebaseMatches} from '../../../firebase'

 class Blocks extends Component {
  state={
      matches: []
  }

  componentDidMount() {
      firebaseMatches.limitToLast(6).once('value').then((snapshot)=>
      
      )
  }

  showMatches = () => (
      <div>
          match
      </div>

  )

    render() {
    return (
      <div className="home_matches">
        {this.showMatches(this.state.matches)}
      </div>
    )
  }
}

export default Blocks;
