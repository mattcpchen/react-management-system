import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BaseButton from '../../atoms/BaseButton'
import SimpleModal from '../../molecules/SimpleModal'
import { NewCardForm_S1, NewCardForm_S2, NewCardForm_S3 } from '../../molecules/NewCardForms'


const ModalContainer = ({className, onHandleCreate}) => {
  const [modalState, setModalState] = useState(false)
  const [createStep, setCreateCardStep] = useState(1)
  const [newClassCard, setNewClassCard] = useState({})

  const generateNewCard = () => {
    onCloseModal()
    onHandleCreate(newClassCard)
  }

  const onOpenModal = () => {
    setModalState(true)
  }
  const onCloseModal = () => {
    setModalState(false)
    setCreateCardStep(1)
    resetCardData()
  }

  const renewCardData = (newData) => {
    const classCard = {
      ...newClassCard,
      ...newData,
    }
    setNewClassCard(classCard);
  }
  const resetCardData = () => {
    setNewClassCard({});
  }


  const modelTitle = createStep === 1
    ? `STEP1: Basic Info`
    : createStep === 2 ? 'STEP2: Find a Photo' : 'STEP3: Review && Submit'
  return (
    <div className={className}>
      <BaseButton handleClick={onOpenModal}>Add New Class</BaseButton>
      <SimpleModal show={modalState} title={modelTitle} handleClose={onCloseModal}>
        {createStep === 1 &&
          <NewCardForm_S1
            setCreateCardStep={setCreateCardStep}
            newClassCard={newClassCard}
            renewCardData={renewCardData}
          />
        }
        {createStep === 2 &&
          <NewCardForm_S2
            setCreateCardStep={setCreateCardStep}
            newClassCard={newClassCard}
            renewCardData={renewCardData}
          />
        }
        {createStep === 3 &&
          <NewCardForm_S3
            setCreateCardStep={setCreateCardStep}
            newClassCard={newClassCard}
            generateNewCard={generateNewCard}
          />
        }
      </SimpleModal>
    </div>
  )
}

ModalContainer.propTypes = {
  className: PropTypes.string,
  onHandleCreate: PropTypes.func,
}

export default ModalContainer
