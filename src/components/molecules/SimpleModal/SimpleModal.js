import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CircleButton from '../../atoms/CircleButton'

const SimpleModal = ({className, show, title, handleClose, children}) => (
  show && (
      <ModalHolder className={className}>
        <ModalBox>
          <StyledCircleButton handleClick={handleClose}>x</StyledCircleButton>
          <ModalTitle>{title}</ModalTitle>
          <ModalContent>
            {children}
          </ModalContent>
        </ModalBox>
    </ModalHolder>
  )
)


const ModalHolder = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0px;
  left: 0px;
  overflow-y: auto;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 100;
  transition: opacity 0.5s cubic-bezier(0.5, 0, 0.25, 1) 0s;
  opacity: 1;
`

const ModalBox = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  top: 10%;
  background: white;
  border: 1px solid #ccc;
  opacity: 1;
  visibility: visible;
`

const ModalTitle = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 12px;
  font-size: 28px;
  font-weight: 600;
`

const ModalContent = styled.div`
  padding: 12px;
`

const StyledCircleButton = styled(CircleButton)`
  top: 10px;
  right: 10px;
  font-size: 22px;
`

SimpleModal.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  title: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.any,
}

export default SimpleModal
