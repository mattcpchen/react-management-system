import React, { useState, createRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseButton from '../../atoms/BaseButton'
import BaseInputText from '../../atoms/BaseInputText'
import ErrorMessage from '../../atoms/ErrorMessage'

const NewCardForm = ({setCreateCardStep, renewCardData}) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const titleRef = createRef()
  const instructorRef = createRef()
  const descriptionRef = createRef()
  const durationRef = createRef()
  const ondemandClassRef = createRef()
  const liveClassRef = createRef()

  const submitForNext = () => {
    const titleTF = titleRef.current
    const instructionTF = instructorRef.current
    const descriptionTF = descriptionRef.current
    const durationTF = durationRef.current
    const onDemandRadio = ondemandClassRef.current
    const liveRadio = liveClassRef.current

    let errMessage = null
    if (titleTF.value === '') {
      errMessage = 'Title is missing!'
    } else if (instructionTF.value === '') {
      errMessage = 'Instructor is missing!'
    } else if (descriptionTF.value === '') {
      errMessage = 'Description is missing!'
    } else if (durationTF.value === '') {
      errMessage = 'Duration is missing!'
    } else if (!onDemandRadio.checked && !liveRadio.checked) {
      errMessage = 'You need to choose the class type'
    } else {
      setCreateCardStep(2)
      renewCardData({
        title: titleTF.value,
        instructor: instructionTF.value,
        description: descriptionTF.value,
        duration: durationTF.value,
        classType: onDemandRadio.checked ? 'on-demand' : 'live',
      })
    }
    resetErrorMessage(errMessage)
  }

  const resetErrorMessage = (errMessage) => {
    setErrorMessage(errMessage);
  }

  return (
    <StyledForm>
      <StyledBaseInputText type='text' inputRef={titleRef} placeholder='Enter Class Title' />
      <StyledBaseInputText type='text' inputRef={instructorRef} placeholder={`Enter Instructorn's Name`} />
      <StyledBaseInputText type='text' inputRef={descriptionRef} placeholder='Enter Class Description' />
      <StyledBaseInputText type='number' inputRef={durationRef} placeholder='Enter Class Duration' />

      <RadioGroup>
        <input type="radio" value="on-demand" ref={ondemandClassRef} name="classType" />On-Demand Class
        <input type="radio" value="live" ref={liveClassRef} name="classType" />Live Class
      </RadioGroup>

      <StyledBaseButton handleClick={submitForNext}>Go To Next Step</StyledBaseButton>
      {errorMessage && <StyleErrorMessage message={errorMessage} />}
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

const StyledBaseInputText = styled(BaseInputText)`
  width: 80%;   
`

const RadioGroup = styled.div`
  margin-top:20px;
`

const StyledBaseButton = styled(BaseButton)`
  margin-top: 20px;
`

const StyleErrorMessage = styled(ErrorMessage)`
  margin-top: 5px;
`

NewCardForm.propTypes = {
  setCreateCardStep: PropTypes.func,
  renewCardData: PropTypes.func,
}

export default NewCardForm
