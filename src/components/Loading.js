import React from 'react'
import styled from 'styled-components'

// resuable Loading component
const LoadingBase = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`

const Loading = () => (
  <LoadingBase>
    <div className='lds-facebook'>
      <div />
      <div />
      <div />
    </div>
  </LoadingBase>
)

export default Loading
