import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import img from '../assets/img/img.jpg'

// import HomeScreen from '../assets/img/HomeScreen.jpg'

const IntroImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  top : 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const SASM = styled.div`
  position: absolute;
  margin-left : 250px;
  margin-top : 350px;
  width : 600px;
  height : 300px;
  // border:1px solid RED;

`;

const Tittle = styled.div`
  font-family: 'Crimson Text';
  color : white;
  font-size : 120px;
  // border:1px solid RED;
`;

const Content = styled.div`
  position: absolute;
  font-family: 'Crimson Text';
  color : white;
  font-size : 30px;
`;

const Wrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  top : 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width : 1000px;
  height : 50px;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  // border:1px solid RED;

`;

const NavBtn = styled.button`
  background:none;
  padding :20px;
  margin-right:50px;
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  border:none;
`;

const StyledLink = styled(Link)`
	box-sizing: border-box;
	display: block;
	margin: 0 auto;
	text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 35px;
  color:black;
  text-decoration:none; 
`;




/*
ISSUE 1
사진 비율에 따라서 화면 페이지 구성을 맞춰서 해줘야 하는건지
어떻게 화면 구성을 맞춰줘야 하는건지 애매한거 같음
일단 Routing만 짜놓고 좀 더 확실한 UI 디자인 나오면
그거에 맞춰서 작업하는 걸로 지금 스타일링 해봐야 의미가 없음
*/
export default function Home(){
  return(
    <>
      <IntroImg src={img}></IntroImg>
      <SASM>
        <Tittle>SASM</Tittle>
      
        <Content>SASM은 지속가능한 공간을 큐레이팅하여,
          한국 도시의 지속가능한 발전을 돕습니다. 
        </Content> 
      </SASM>


        <Wrapper>
        {/* hover 추가하기 */}
        <NavBtn>
          <StyledLink to="/map">MAP</StyledLink>
        </NavBtn>
    
  
        <NavBtn> 
        <StyledLink to="/story">STORY</StyledLink>
        </NavBtn>

        <NavBtn>
        <StyledLink to="/">ABOUT</StyledLink>
        </NavBtn>
  
        <NavBtn>
        <StyledLink to="/">MY PICK</StyledLink>
        </NavBtn>
  
       

        {/* <NavBtn> 
         <StyledLink to="/auth">Sign in</StyledLink> 
        </NavBtn>  */}
       
      </Wrapper>
    </>
  )
};

/*
ISSUE 2
페이지 전반의 구성과 그리고 그것이 어떤 방식으로 연결되면 좋을지
레퍼런스 페이지들이나 이런 것들을 바탕으로 좀 더 정확하게 알면 좋을 것 같음
리서치팀에서 나온 것들을 종합해서 페이지구조도 자체는 확정이 되야 작업할 수 있겠다
*/ 