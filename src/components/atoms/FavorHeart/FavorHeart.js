import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Imagebox from "../ImageBox";

const FavorHeart = ({ className, isFavored, handleClick}) => (
  <StyledHeart
    className={className}
    isFavored={isFavored}
    onClick={handleClick}
  />
)

const StyledHeart = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: ${props => props.isFavored? '#c00' : '#333'};
  box-shadow: 0 0 10px 3px #fff;
  cursor: pointer;
  
  &:before, &:after {
    position: absolute;
    width: 18px;
    height: 18px;
    content: '';
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    background-color: ${props => props.isFavored? '#c00' : '#333'};
  }
  &:before {
    bottom: 0px;
    left: -9px;
  }
  &:after {
    top: -9px;
    right: 0px;
  }
`

Imagebox.propTypes = {
  className: PropTypes.string,
  isFavored: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default FavorHeart;
