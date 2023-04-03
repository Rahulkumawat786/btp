import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: #ffffff;
  cursor: pointer;
`;

const SignupForm = ({ setIsLogedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogedIn(true);
    navigate("/dashboard");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <InputWrapper>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="text"
          value={username}
          required
          onChange={(e) => setUserName(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <Button type="submit">Signup</Button>
      <Link to="/login">Already have an account? Login</Link>
    </FormWrapper>
  );
};

export default SignupForm;
