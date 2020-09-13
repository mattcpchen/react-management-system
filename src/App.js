import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import classList from './helpers/classes'
import BaseButton from './components/atoms/BaseButton'
import ClassCards from './components/organisms/ClassCards'
import NavBar from './components/molecules/NavBar'
import ModalContainer from './components/organisms/ModalContainer'
import { display as mediaDisplay } from './helpers/deviceHelper'

const App = () => {
  const [showState, setShowState] = useState('showAll')
  const [allClasses, setAllClasses] = useState()
  const [classes, setClasses] = useState()

  /**
   * The reason we also includes allClasses is because we wanna
   * update classes when we are in MyFavor page as well
   */
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
  }, [allClasses, showState])

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

    // back to showAll if we uncheck favor
    // reason to be 1 instead of 0 >> cause it will be updated to 0 AFTERWARDS @ useEffect
    if (showState === 'showFavored' && newClasses.length === 1) {
      onToggleShowState()
    }
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

    // back to showAll if we have none favor left
    if (showState === 'showFavored' && newClasses.length === 0) {
      onToggleShowState()
    }
  }

  const title = showState === 'showAll'
    ? 'Welcome to RookieCookie!'
    : `My Favorite Class${classes.length > 1 ? 'es' : ''}`
  return (
    <Wrapper>
      <NavBar />
      <NavBarTitle>{title}</NavBarTitle>
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
  margin-top: 65px;
  text-align: center;
  @media ${mediaDisplay.with4} {
    margin-top: 45px;
  }
`
const NavBarTitle = styled.div`
  display: block;
  font-size: 1em;
  margin: 0.3em 0 0.3em 0;
  font-weight: bold;
  @media ${mediaDisplay.with4} {
    margin: 0.67em 0 0.67em 0;
    font-size: 2em;
  }
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

