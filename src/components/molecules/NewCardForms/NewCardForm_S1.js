import React, { useState, useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseButton from '../../atoms/BaseButton'
import BaseInputText from '../../atoms/BaseInputText'
import ErrorMessage from '../../atoms/ErrorMessage'

const isNumberic = (numString) => {
  return numString.replace(/[^0-9]/gi, '') === numString
}

const NewCardForm = ({setCreateCardStep, newClassCard, renewCardData}) => {
  const [errorMessage, setErrorMessage] = useState(null)
  // createRef
  const titleRef = createRef()
  const instructorRef = createRef()
  const descriptionRef = createRef()
  const durationRef = createRef()
  const ondemandClassRef = createRef()
  const liveClassRef = createRef()

  useEffect(() => {
    titleRef.current.value = newClassCard.title || ''
    instructorRef.current.value = newClassCard.instructor || ''
    descriptionRef.current.value = newClassCard.description || ''
    durationRef.current.value = newClassCard.duration || ''
    ondemandClassRef.current.checked = newClassCard.classType === 'on-demand'
    liveClassRef.current.checked = newClassCard.classType === 'live'
  }, [newClassCard])

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
      errMessage = 'Duration is missing or Wrong format!'
    } else if ( !isNumberic(durationTF.value) ) {
      errMessage = 'Duration MUST be number only!'
    } else if (!onDemandRadio.checked && !liveRadio.checked) {
      errMessage = 'You need to choose the class type'
    } else {
      setCreateCardStep(2)
      renewCardData({
        title: titleTF.value,
        instructor: instructionTF.value,
        description: descriptionTF.value,
        duration: Number(durationTF.value),
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
        <input type="radio" value="on-demand" ref={ondemandClassRef} name="classType" id="classType-onDemand" />
        <label htmlFor="classType-onDemand">On-Demand Class</label><br/>
        <input type="radio" value="live" ref={liveClassRef} name="classType" id="classType-live" />
        <label htmlFor="classType-live">Live Class</label>
      </RadioGroup>

      <StyledBaseButton handleClick={submitForNext}>Go To Next Step</StyledBaseButton>
      {errorMessage && <StyleErrorMessage message={errorMessage} />}
    </StyledForm>
  )
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
  newClassCard: PropTypes.object,
}

export default NewCardForm
