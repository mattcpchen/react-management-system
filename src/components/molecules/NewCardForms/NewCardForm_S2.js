import React, { useState, createRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseButton from '../../atoms/BaseButton'
import BaseInputText from '../../atoms/BaseInputText'
import ErrorMessage from '../../atoms/ErrorMessage'
import ImapeSwiper from '../ImageSwiper'
import { Default_Image } from '../../atoms/DefaultImage'
import { loadImages } from '../../../helpers/httpHelper'

const NewCardForm = ({setCreateCardStep, renewCardData}) => {
  const searchQueryRef = createRef()
  const [images, setImages] = useState()
  const [imageIndex, selectImage] = useState(-1)
  const [errorMessage, setErrorMessage] = useState(null)

  const doSearchImages = async () => {
    const currQuery = searchQueryRef.current.value
    const { totalHits, hits } = await loadImages(currQuery)
    if (totalHits === 0) {
      searchQueryRef.current.value = ''
      setErrorMessage('We cannot find any photos for you, please try search again!')
    } else {
      setErrorMessage(null)
    }

    const images = hits.map(data => ({
      imageId: data.id,
      imageUrl: data.webformatURL,
    }))
    const imageIndex = images.length === 0 ? -1 : 0
    setImages(images)
    selectImage(imageIndex)
  }

  const choosseImage = (dir) => {
    const lastImage = images.length-1
    let nextImage = imageIndex + dir
    if (nextImage < 0) nextImage = lastImage
    if (nextImage > lastImage) nextImage = 0
    selectImage(nextImage)
  }

  const submitForBack = () => {
    setCreateCardStep(1)
  }
  const submitForNext = () => {
    const useDefault = !images || images.length === 0 || imageIndex === -1
    renewCardData({
      id: useDefault ? Math.floor(300+Math.random()*300) : images[imageIndex].imageId,
      featureImageUrl: useDefault ? Default_Image : images[imageIndex].imageUrl,
    })
    setCreateCardStep(3)
  }

  return (
    <StyledForm>
      <SearchInput>
        <StyledInputText type='text' inputRef={searchQueryRef} placeholder='Enter Search Here' />
        <StyledButton handleClick={doSearchImages}>Search</StyledButton>
      </SearchInput>
      {errorMessage && <StyleErrorMessage message={errorMessage} />}
      <ImapeSwiper imageIndex={imageIndex} images={images} handleChooseImage={choosseImage} />
      <div>
        <StyledButton handleClick={submitForBack}>Go Back</StyledButton>
        <StyledButton handleClick={submitForNext}>Go Next</StyledButton>
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

const StyleErrorMessage = styled(ErrorMessage)`
  margin-top: 55px;
  position: absolute;
`

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInputText = styled(BaseInputText)`
  width: 300px;   
`

const StyledButton = styled(BaseButton)`
  margin: 10px;
`

NewCardForm.propTypes = {
  setCreateCardStep: PropTypes.func,
  renewCardData: PropTypes.func,
}

export default NewCardForm
