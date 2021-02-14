import React, { useEffect, useState } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Home from '../components/home/Home';

const HomePage = () => {
  // http 요청(jquery ajax, fetch, axios)
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  //빈 배열 한번만 실행
  useEffect(() => {
    //다운로드 가정
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...data]);
    setUser({ id: 1, username: 'ssar' });
  }, []);
  return (
    <div>
      <Header />
      <Home boards={boards} setBoards={setBoards} user={user} />
      <Footer />
    </div>
  );
};

export default HomePage;
