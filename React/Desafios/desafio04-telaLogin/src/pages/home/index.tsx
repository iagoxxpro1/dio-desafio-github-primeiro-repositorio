import React, { useState } from "react";

import { InputContainer } from "./styles";
import { ButtonContainer } from "./styles";
import { Container, LoginContainer, Column, Spacing, Title } from "./styles";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    alert(`Your state values: \n 
            email: ${email} \n 
            password: ${password} \n 
            You can replace this alert with your process`);
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
    <form onSubmit={handleSubmit}>
      <div>
        <InputContainer>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
        />
        </InputContainer>
      </div>
      <Spacing />
      <div>
        <InputContainer>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handlePasswordChange}
          value={password}
        />
        </InputContainer>
      </div>
      <Spacing />
      <ButtonContainer>
      <button type="submit" disabled={!email || !password}>
        Entrar
      </button>
      </ButtonContainer>
    </form>
        </Column>
      </LoginContainer>
    </Container>
  );
}

export default Home