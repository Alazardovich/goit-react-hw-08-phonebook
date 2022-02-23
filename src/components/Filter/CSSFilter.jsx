import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;
  font-size: 18px;

  & input {
    display: block;
    border-color: rgba(235, 236, 240);
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
    border-radius: 5px;
  }
  & input:hover {
    background-color: rgba(130, 231, 231, 0.6);
  }
`;
