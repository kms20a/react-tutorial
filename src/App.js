import './App.css';
import { useState } from 'react';
import Sub from './Sub';

//0. React 엔진 - 데이터변경감지에서 UI 그려주는!!
//1. 실행과정 - SPA(Single Page Application)
//2. JSX 문법

//return시에 하나의 Dom만 리턴할 수 있다.
//변수선언은 let 혹은 const로만 해야함
//if사용 불가능(X) > 삼항연산자
//조건부 렌더링 (조건 && 값(true))
//css디자인
//  - 내부에 적는 방법
//  - 외부 파일에 적는 방법
//  - 라이브러리 사용(부트스트랩, component-styled)

function App() {
  // let number = 1; //상태값 아님
  const [number, setNumber] = useState(1); //React안에 hooks 라이브러리 상태값이 됨.
  const add = () => {
    setNumber(number + 1); //리액트한테 number 값 변경할께 라고 요청
    console.log('add', number);
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
      <Sub />
    </div>
  );
}

export default App;
