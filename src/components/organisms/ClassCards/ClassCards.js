import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ClassCard from '../../molecules/ClassCard'
import { size as mediaSize, display as mediaDisplay } from '../../../helpers/deviceHelper'

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
  margin: 0 auto;
  width: ${mediaSize.with2};
  &::after {
    content: '';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
  }
  @media ${mediaDisplay.with3} {
    width: ${mediaSize.with3};
  }
  @media ${mediaDisplay.with4} {
    width: ${mediaSize.with4};
  }
  @media ${mediaDisplay.with5} {
    width: ${mediaSize.with5};
  }
  @media ${mediaDisplay.with6} {
    width: ${mediaSize.with6};
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
