import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const BaseInput = ({ className, label }) => (
  <div className={className}>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput></StyledInput>
  </div>
)

const StyledLabel = styled.label`
  letter-spacing: 0.2px;
  display: block;
  width: 100%;
  margin: 0px;
  color: rgb(79, 111, 143);
  font-size: 10px;
  font-weight: 700;
`

const StyledInput = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  padding: 14px 12px;
  margin: 0px;
  border-color: rgb(192, 202, 213);
`

BaseInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
}

export default BaseInput;
