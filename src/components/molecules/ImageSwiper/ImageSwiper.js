import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CircleButton from '../../atoms/CircleButton'
import { Search_Image } from '../../atoms/DefaultImage'

const ImageSwiper = ({imageIndex, images, handleChooseImage}) => {
  const useDefaultImage = !images || images.length === 0 || imageIndex === -1;
  const displayBtns = !useDefaultImage && images.length > 1
  return (
    <ImageHolder imgUrl={useDefaultImage ? Search_Image : images[imageIndex].imageUrl}>
      {displayBtns && (
        <>
          <StyledCircleButton btnType='backBtn' handleClick={handleChooseImage.bind(this, -1)}>
            {`<`}
          </StyledCircleButton>
          <StyledCircleButton btnType='nextBtn' handleClick={handleChooseImage.bind(this, 1)}>
            {`>`}
          </StyledCircleButton>
        </>
      )}
    </ImageHolder>
  )
}

const ImageHolder = styled.div`
  position: relative;
  width: 450px;
  height: 250px;
  background-color: #333;
  background-image: ${props => `url("${props.imgUrl}")`};
  background-size: cover;
  background-position: center;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 0 3px 1px #333;
`
const StyledCircleButton = styled(CircleButton)`
  font-size: 20px;
  font-weight: 300;
  background: rgba(1,1,1,0.3);
  position: absolute;
  top: 50%;
  left: ${props => props.btnType === 'backBtn' ? '10px' : 'auto'};
  right: ${props => props.btnType === 'nextBtn' ? '10px' : 'auto'};
`

ImageSwiper.propTypes = {
  imageIndex: PropTypes.number,
  images: PropTypes.array,
  handleChooseImage: PropTypes.func,
}

export default ImageSwiper
