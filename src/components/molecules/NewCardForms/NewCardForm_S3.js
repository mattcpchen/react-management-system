import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseButton from '../../atoms/BaseButton'
import ClassCard from '../../molecules/ClassCard'

const NewCardForm = ({setCreateCardStep, generateNewCard, newClassCard}) => {

  const submitForBack = () => {
    setCreateCardStep(2)
  }
  const submitForAddNew = () => {
    generateNewCard()
  }

  return (
    <StyledForm>
      <ClassCard content={newClassCard} hideFavBtn hideDeleteBtn />
      <div>
        <StyledButton handleClick={submitForBack}>Back</StyledButton>
        <StyledButton handleClick={submitForAddNew}>Submit</StyledButton>
      </div>
    </StyledForm>
  )
}



NewCardForm.propTypes = {
}

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledButton = styled(BaseButton)`
  margin: 10px;
`

NewCardForm.propTypes = {
  setCreateCardStep: PropTypes.func,
  generateNewCard: PropTypes.func,
  newClassCard: PropTypes.object,
}

export default NewCardForm
