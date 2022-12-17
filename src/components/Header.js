import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrap>
      <LeftNav>
        <img src="./images/search.png" alt="" />
      </LeftNav>
      <RightNav>
        <img src="./images/invite.png" alt="" />
        <img src="./images/calendar.png" alt="" />
        <img src="./images/noti.png" alt="" />
        <div className='profileDiv'>

        {/* <img src="./images/profile.jpg" alt="" /> */}
        </div>
      </RightNav>
    </Wrap>
  )
}

export default Header

const Wrap = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img{
    width: 40px;
    height: 40px;
  }
`
const LeftNav = styled.div`

`
const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  // width: 20vw;
  // justify-content: space-between;
  align-items: center;
  img{
    margin: 0 19px;
  }
  .profileDiv{
    margin: 0 19px;
    width: 40px;
    height: 40px;
    background-image: url(./images/profile.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
  }
`