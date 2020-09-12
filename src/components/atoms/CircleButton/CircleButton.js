import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const CircleButton = ({className, children, handleClick}) => (
  <StyledButton className={className} onClick={handleClick}>
    {children}
  </StyledButton>
)

const StyledButton = styled.div`
  width: 30px;
  height: 30px;
  background: #333;
  font-size: 30px;
  color: #fff;
  font-weight: 900;
  line-height: 26px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 10px 3px #fff;
`

CircleButton.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.any,
}

export default CircleButton;
