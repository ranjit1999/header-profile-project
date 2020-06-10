import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import Aux from '../hoc/xyz'

const icon = props => {
  return (
    <Aux>
      <div
        style={{
          display: 'inline-block',
          margin: '10px 20px',
          fontSize: '2.5rem'
        }}>
        <a
          href='#'
          style={{
            textDecoration: 'none',
            color: '#fff',
            textTransform: 'uppercase'
          }}>
          {props.value}
        </a>
      </div>
      <GoPrimitiveDot />
    </Aux>
  )
}

export default icon