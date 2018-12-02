import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { blue } from 'ansi-colors'

// mainBlue: 00a2f7  // primary Color
// lightBlue: 1ab0ff // hover color

const mainBlue = '#00a2f7'
const lightBlue = '#1ab0ff'

// resuable button with different variants
const BaseButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  margin: 10px;
  border-radius: 5px;
  padding: 4px 10px;
  transition: all 0.3s;
  text-decoration: none;
`

const Button = styled(BaseButton)`
  ${is('primary')`
    background: ${mainBlue};
    color: white;
    border: 1px solid ${mainBlue};
    &:hover {
      background: ${lightBlue};
    }
  `};
  ${is('secondary')`
    background: white;
    color: ${mainBlue};
    border: 1px solid white;

    &:hover {
      color: ${lightBlue};
    }
  `};
  ${is('link')`
    background: white;
    color: ${mainBlue};
    border: 0;
    &:hover {
      color: ${lightBlue};
      text-decoration: none;
    }
  `};
`

export default Button
