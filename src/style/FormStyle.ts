import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto 2rem auto;
`;

export const Input = styled.input`
  width: 25rem;
  height: 2.5rem;
  border: 0.1rem solid gray;
  border-radius: 0.7rem;
  outline: none;
  margin-right: 1rem;
  padding: 0 0.5rem;
  font-size: 1.2rem;
`;

export const AddButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url('img/Bucket_Plus.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #13B3BC;
    color: #FFFEFA;
  }
`