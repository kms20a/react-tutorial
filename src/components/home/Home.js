import React from 'react';

//Function 방식(이전에는 class 방식으로 사용 되었음 )
const Home = (props) => {
  //   const boards = props.boards;
  //   console.log(props);

  //구조분할 할당
  const { boards, setBoards, number, setNumber } = props;
  return (
    <div>
      <h1>홈 : {number} </h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
