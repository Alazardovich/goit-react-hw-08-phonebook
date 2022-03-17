import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  width: 1000px;
  margin: 0 auto;
  height: 70px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  /* border-radius: 5px; */
  color: #fcc159;
  background-color: rgba(89, 131, 252, 1);
  background-image: linear-gradient(
    90deg,
    rgba(89, 131, 252, 1) 0%,
    rgba(41, 53, 86, 1) 100%
  );
`;

const HomeView = () => (
  <Div>
    <h1 style={{ paddingTop: 10, margin: 0 }}>
      Я Вас приветствую, это Phonebook!
    </h1>
  </Div>
);
export default HomeView;
