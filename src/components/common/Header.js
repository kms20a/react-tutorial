import React from 'react';
import styled from 'styled-components';

//하나의 컴포넌트를 생성(재사용)

//styled-components => js파일과 css파일 관리
const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Header = () => {
  return (
    <StyledHeaderDiv>
      <ul>
        <li>메뉴 1</li>
        <li>메뉴 2</li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default Header;
