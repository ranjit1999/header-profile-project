import React, { Component } from 'react'
import { IoIosPersonAdd } from 'react-icons/io'
import { FiMail, FiFlag } from 'react-icons/fi'

import image from '../assets/male.png'
import Icon from './icon'

export default class icons extends Component {
  state = {
    icons: [
      { val: <FiMail />, name: FiMail },
      { val: <FiFlag />, name: FiFlag },
      { val: <IoIosPersonAdd />, name: IoIosPersonAdd }
    ]
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginLeft: '2rem',
          width: '25%'
        }}>
        <div
          style={{
            display: 'inline-block',
            height: 'auto',
            width: '5rem',
            marginRight: '3rem'
          }}>
          <a href='#'>
            <img
              src={image}
              alt='person'
              style={{ height: '100%', width: '100%' }}
            />
          </a>
        </div>
        {this.state.icons.map(icon => {
          return <Icon key={icon.name} value={icon.val} />
        })}
      </div>
    )
  }
}