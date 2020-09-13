import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Imagebox from "../ImageBox";

const ErrorMessage = ({ className, message }) => (
  <MessageHolder className={className}>{message}</MessageHolder>
)

const MessageHolder = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #c00;
`

Imagebox.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
}

export default ErrorMessage;
