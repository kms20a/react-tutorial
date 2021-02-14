import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//component style 상속
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
  background-color: green;
`;

//Function 방식(이전에는 class 방식으로 사용 되었음 )
const Home = (props) => {
  //   const boards = props.boards;
  //   console.log(props);

  //구조분할 할당
  const { boards, setBoards, user } = props;

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
