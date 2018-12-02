import React from 'react'
import styled from 'styled-components'

const Container = props => {
  return (
    <div className='container'>
      <div className='col-lg-12'>{props.children}</div>
    </div>
  )
}

export default Container
