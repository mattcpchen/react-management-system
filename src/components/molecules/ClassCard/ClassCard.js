import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FavorHeart from '../../atoms/FavorHeart'
import CircleButton from '../../atoms/CircleButton'

const ClassCard = ({className, content, hideFavBtn, hideDeleteBtn, toggleFavor, handleDelete}) => {
  const {
    classType,
    description,
    duration,
    featureImage,
    featuredImage,
    featureImageUrl,
    instructor,
    title,
    isFavored,
  } = content
  const imgUrl = featureImage || featuredImage || featureImageUrl
  return (
  <CardWrapper className={className}>
    {!hideFavBtn && <StyledFavorHeart handleClick={toggleFavor} isFavored={isFavored} />}
    {!hideDeleteBtn && <StyledCircleButton handleClick={handleDelete}>-</StyledCircleButton>}
    <CardImage src={imgUrl} alt='' />
    <CardContent>
      <h4>{title}</h4>
      <h5>{instructor}</h5>
      <h5>{description}</h5>
      <h5>{duration} min</h5>
      <h5>{classType}</h5>
    </CardContent>
  </CardWrapper>
)}

const CardWrapper = styled.div`
  position: relative;
  width: 175px;
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
  height: 200px;
  overflow: auto;
`

ClassCard.propTypes = {
  content: PropTypes.shape({
    classType: PropTypes.string,
    id: PropTypes.number,
    duration: PropTypes.string,
    title: PropTypes.string,
    featureImage: PropTypes.string,
    featuredImage: PropTypes.string,
    featureImageUrl: PropTypes.string,
    instructor: PropTypes.string,
  }),
  hideFavBtn: PropTypes.bool,
  hideDeleteBtn: PropTypes.bool,
};
ClassCard.defaultProps = {
  hideFavBtn: false,
  hideDeleteBtn: false,
}

export default ClassCard;
