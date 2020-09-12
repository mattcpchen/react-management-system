import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ClassCard from '../../molecules/ClassCard'

const ClassCards = ({className, classes, onToggleFavor, onHandleDelete}) => (
  <ClassCardHolder className={className}>
    {classes && classes.map((klass, index) =>
      <StyledClassCard
        key={`${index}-${klass.id}`}
        toggleFavor={onToggleFavor.bind(this, klass.id)}
        handleDelete={onHandleDelete.bind(this, klass.id)}
        content={klass}
      />
    )}
  </ClassCardHolder>
)

const ClassCardHolder = styled.div`
  position: relative;
  width: 800px;
  margin: 0 auto;
  &::after {
    content: '';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
  }
`

const StyledClassCard = styled(ClassCard)`
  float: left;
  margin: 10px;
`

ClassCards.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.array,
  onToggleFavor: PropTypes.func,
  onHandleDelete: PropTypes.func,
}

export default ClassCards;
