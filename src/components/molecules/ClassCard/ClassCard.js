import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FavorHeart from '../../atoms/FavorHeart'
import CircleButton from '../../atoms/CircleButton'

const ClassCard = ({className, content, isForPreview, toggleFavor, handleDelete}) => {
  const {
    title,
    instructor,
    description,
    duration,
    classType,
    featureImage,
    featuredImage,
    featureImageUrl,
    isFavored,
  } = content
  const imgUrl = featureImage || featuredImage || featureImageUrl
  return (
  <CardWrapper className={className} isForPreview={isForPreview} >
    {!isForPreview && <StyledFavorHeart handleClick={toggleFavor} isFavored={isFavored} />}
    {!isForPreview && <StyledCircleButton handleClick={handleDelete}>-</StyledCircleButton>}
    <CardImage src={imgUrl} alt='' />
    <CardContent>
      <CardContentTitle>{title}</CardContentTitle>
      <CardContentDetail>
        <p>Instructor: {instructor}</p>
        <p>Description: {description}</p>
        <p>Total time: {duration} min</p>
        <p>Class Type: {classType}</p>
      </CardContentDetail>
    </CardContent>
  </CardWrapper>
)}

const CardWrapper = styled.div`
  position: relative;
  width: 175px;
  width: ${props => props.isForPreview ? '300px' : '175px'};
  height: 300px;
  border-radius: 10px;
  border: solid 1px #999;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  overflow: hidden;
`

const StyledFavorHeart = styled(FavorHeart)`
  top: 16px;
  left: 16px;
`

const StyledCircleButton = styled(CircleButton)`
  top: 10px;
  right: 10px;
`

const CardImage = styled.img`
  width: 100%;
  height: 50%;
`

const CardContent = styled.div`
  height: 150px;
  overflow: auto;
`
const CardContentTitle = styled.div`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 15px;
  padding: 0 5px;
`

const CardContentDetail = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  padding: 0 5px;
`

ClassCard.propTypes = {
  content: PropTypes.shape({
    classType: PropTypes.string,
    id: PropTypes.number,
    duration: PropTypes.number,
    title: PropTypes.string,
    featureImage: PropTypes.string,
    featuredImage: PropTypes.string,
    featureImageUrl: PropTypes.string,
    instructor: PropTypes.string,
  }),
  isForPreview: PropTypes.bool,
};
ClassCard.defaultProps = {
  isForPreview: false,
  isFavored: false,
}

export default ClassCard;
