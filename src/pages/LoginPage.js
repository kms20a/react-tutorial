import React from 'react';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  console.log('LoginPage', props);
  console.log(props.match.params.id);

  const { history } = props;
  return (
    <div>
      <button onClick={() => history.go(-1)}>뒤로가기(go)</button>
      <button onClick={() => history.goBack(1)}>뒤로가기(goBack)</button>
      <button onClick={() => history.push('/')}>홈으로가기</button>
      <Login />
    </div>
  );
};

export default LoginPage;
