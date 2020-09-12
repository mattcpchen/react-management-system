import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import classList from './helpers/classes'
import BaseButton from './components/atoms/BaseButton'
import ClassCards from './components/organisms/ClassCards'
import NavBar from './components/molecules/NavBar'
import ModalContainer from './components/organisms/ModalContainer'

const App = () => {
  const [showState, setShowState] = useState('showAll')
  const [allClasses, setAllClasses] = useState()
  const [classes, setClasses] = useState()

  useEffect(() => {
    // when first mounted
    if (allClasses === undefined) {
      setAllClasses(classList)
      setClasses(classList)
      return
    }
    // when mark favored
    const newClasses = allClasses.filter(card => {
      if (showState === 'showFavored') {
        return card.isFavored
      } else {
        return true
      }
    })
    setClasses(newClasses)
  }, [showState])

  const onToggleShowState = () => {
    const newShowState = showState === 'showAll' ? 'showFavored' : 'showAll'
    setShowState(newShowState)
  }

  const onToggleFavorCard = (cardId) => {
    const newClasses = classes.map(card => {
      const favorState = Boolean(card.isFavored)
      return {
        ...card,
        isFavored: card.id === cardId ? !favorState : favorState
      }
    })
    const newAllClasses = allClasses.map(card => {
      const favorState = Boolean(card.isFavored)
      return {
        ...card,
        isFavored: card.id === cardId ? !favorState : favorState
      }
    })
    setClasses(newClasses)
    setAllClasses(newAllClasses)
  }

  const onHandleCreate = (newClass) => {
    const newClasses = [...classes, newClass]
    const newAllClasses = [...allClasses, newClass]
    setClasses(newClasses)
    setAllClasses(newAllClasses)
  }

  const onHandleDelete = (cardId) => {
    const newClasses = classes.filter(card => card.id !== cardId)
    const newAllClasses = allClasses.filter(card => card.id !== cardId)
    setClasses(newClasses)
    setAllClasses(newAllClasses)
  }

  const title = showState === 'showAll'
    ? 'Welcome to RookieCookie!'
    : 'My Favorite RookieCookie!'
  return (
    <Wrapper>
      <NavBar />
      <h1>{title}</h1>
      <ClassCards
        classes={classes}
        onToggleFavor={onToggleFavorCard}
        onHandleDelete={onHandleDelete}
      />
      <ButtonGroup>
        <StyledModalButton onHandleCreate={onHandleCreate} />
        <FavorButton
          isFavored={showState === 'showFavored'}
          handleClick={onToggleShowState}>
          My Favor Classes <span>&#9829;</span>
        </FavorButton>
      </ButtonGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 45px;
  text-align: center;
`

const ButtonGroup = styled.div`
  margin-top: 20px;
`

const FavorButton = styled(BaseButton)`
  margin-left: 10px;
  background-color: #c00;
  font-weight: 900;
  background-color: ${props => props.isFavored ? '#333' : '#c00'};
  box-shadow: ${props => props.isFavored ? '0 0 5px 1px #c00' : 'none'};
  line-height: 2.5;
  border-radius: 10px;
`

const StyledModalButton = styled(ModalContainer)`
  display: initial;
`

export default App

