import styled from "styled-components";

export const Form = styled.form`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: right;
  background-color: rgba(89, 131, 252, 1);
  background-image: linear-gradient(
    90deg,
    rgba(89, 131, 252, 1) 0%,
    rgba(41, 53, 86, 1) 100%
  );
  h1 {
    position: relative;
    top: 0px;
    padding: 0;
  }
  label {
    padding: 10px;
  }
  input {
    margin-left: 10px;
    border-radius: 5px;
  }
  input:hover {
    background-color: rgba(130, 231, 231, 0.6);
  }

  button {
    width: 150px;
    background-color: #518cfa;
    color: #000000;
    font-size: 12px;
    margin: 80px 0 0 40px;
    border-radius: 5px;
  }
  button:hover {
    color: white;
  }
`;

export const Label = styled.label`
  margin-right: 21px;
`;

export const ContainerContacts = styled.div`
  width: 400px;
  height: auto;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: right;
  background-color: rgba(89, 131, 252, 1);
  background-image: linear-gradient(
    90deg,
    rgba(89, 131, 252, 1) 0%,
    rgba(41, 53, 86, 1) 100%
  );
`;

export const Div = styled.div`
  text-align: center;
  width: 1000px;
  margin: 0 auto;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 70px;

  color: #fcc159;
  background-color: rgba(89, 131, 252, 1);
  background-image: linear-gradient(
    90deg,
    rgba(89, 131, 252, 1) 0%,
    rgba(41, 53, 86, 1) 100%
  );
  h2 {
    margin: 0;
    padding-top: 15px;
  }
`;
