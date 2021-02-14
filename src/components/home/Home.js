import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;
//Function 방식(이전에는 class 방식으로 사용 되었음 )
const Home = (props) => {
  //   const boards = props.boards;
  //   console.log(props);

  //구조분할 할당
  const { boards, setBoards, user } = props;

  return (
    <div>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
