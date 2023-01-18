import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #191c24;
  border-radius: 5px;
  padding: 5px 5px;
  width: 24vw;
  height: 30vh;

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;
  color:#fff svg {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
  color: #fff;
`;

export const Total = styled.span`
  font-size: 40px;
  margin: 2rem 0 0 0;
  color: #fff;
`;
