import styled from "styled-components";

export const Table = styled.table`
  width: 76.5vw;
  background-color: #191c24;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 2rem 0 0 18rem;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
color: #fff`;

export const Tr = styled.tr`
color: #fff;
font-weight: none;
`;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;