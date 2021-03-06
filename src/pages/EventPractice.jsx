import React, { useState } from "react";
import styled from "styled-components";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  }); // 객체로 한꺼번에 관리

  const { username, message } = form; // 구조분해 할당
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    console.log(e.target.value);
    console.log(nextForm);
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <Input
        type="text"
        name="username"
        placeholder="사용자명"
        // value={username}
        onChange={onChange}
      />
      <Input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        // value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}></button>
    </div>
  );
};

export default EventPractice;

const Input = styled.input.attrs({ required: true, minlength: 10 })``;
