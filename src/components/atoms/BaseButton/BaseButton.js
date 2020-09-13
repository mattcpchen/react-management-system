import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseButton = ({ className, handleClick, children}) => (
  <StyledButton className={className} onClick={handleClick}>
    {children}
  </StyledButton>
)

const StyledButton = styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 5px;
  border-width: 0px;
  border-style: solid;
  font-size: 14px;
  padding: 9.5px 18px;
  background-color: rgb(0, 122, 255);
  color: rgb(255, 255, 255);
`

BaseButton.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.any,
}

export default BaseButton;
