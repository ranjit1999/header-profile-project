import React, { Component } from 'react'
import Aux from '../hoc/xyz'

class Search extends Component {
  render() {
    return (
      <Aux>
        <form className='navbar-form navbar-left' style={{ width: '300px' }}>
          <div className='form-group' style={{ width: '100%' }}>
            <input
              style={{ width: '100%' }}
              type='text'
              className='form-control'
              placeholder='Search for ...'
            />
          </div>
          {/* <p>{this.state.query}</p> */}
        </form>
      </Aux>
    )
  }
}

export default Search
