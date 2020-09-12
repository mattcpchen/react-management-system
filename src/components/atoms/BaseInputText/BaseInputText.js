import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const BaseInputText = ({ className, type, inputRef, placeholder}) => (
  <StyledInputText
    className={className}
    ref={inputRef}
    type={type}
    placeholder={placeholder}
  />
)

const StyledInputText = styled.input`
  appearance: none;
  display: block;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  padding: 14px 12px;
  margin: 5px;
  border-color: rgb(192, 202, 213);
`

BaseInputText.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  placeholder: PropTypes.string,
}

export default BaseInputText;
