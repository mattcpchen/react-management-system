import React from 'react'
import styled from 'styled-components'
import { display as mediaDisplay } from '../../../helpers/deviceHelper'

const NavBar = props => {
  return (
    <Header>
      <HeaderMenu>
        <HeaderItem>
          RookieCookie
        </HeaderItem>
      </HeaderMenu>
    </Header>
  )
}
export default NavBar

NavBar.displayName = 'NavBar'

const Header = styled.header`
  background-color: #00c4ff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  box-shadow: 0 0 5px 0 gray;
  @media ${mediaDisplay.with4} {
    height: 25px;
  }
`
const HeaderMenu = styled.div`
  margin-top: 0px;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  @media ${mediaDisplay.with4} {
    justify-content: space-between;
  }
`
const HeaderItem = styled.div`
  color: #fff;
  padding: 0 10px 0 10px;
  font-size: 28px;
  text-shadow: 2px 2px #000;
  font-weight: 900;
  text-align: center;
  box-sizing: border-box;
  list-style-type: none;
  @media ${mediaDisplay.with4} {
    font-size: 14px;
  text-shadow: 1px 1px #000;
    font-weight: 600;
  }
`
