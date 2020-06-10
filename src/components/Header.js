import React, { Component } from 'react'
import { GrLinkedin } from 'react-icons/gr'

import Search from './Search'
import Icons from './icons'

class Header extends Component {
  render() {
    return (
      <div
        style={{
          height: '7rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#5f6170',
          width: '100%'
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '34%'
          }}>
          <div
            className='box'
            style={{
              width: '4.5rem',
              height: '4.5rem',
              backgroundColor: 'white'
            }}>
            <a href='#'>
              <GrLinkedin color='#0e76a8' size='90%' />
            </a>
          </div>
          <Search />
        </div>
        <Icons />
      </div>
    )
  }
}
export default Header