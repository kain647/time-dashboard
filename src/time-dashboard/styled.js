import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Rubik", sans-serif;
`;
export const MenuBox = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 550px;
  flex-direction: column;
  border-radius: 15px 15px 0 0;
  background-color: #1c1f4a;
`;
export const Header = styled.div`
  display: flex;
  width: 200px;
  height: 300px;
  flex-direction: column;
  background: #5847eb;
  border-radius: 15px;
  padding: 36px 32px;
`;
export const Avatar = styled.div`
  display: flex;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 4px #bdc1fe solid;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: #bdc1fe;
`;
export const Name = styled.h1`
  display: flex;
  line-height: 1.25;
`;
export const ButtonContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  display: flex;
  font-size: 18px;
  width: min-content;
  color: ${({ active }) => (active ? "#fff" : "#6276c8")};
  cursor: pointer;
  padding: 15px;
  :hover {
    color: #fff;
  }
`;

export const Daily = styled.div`
  display: flex;
  font-size: 18px;
  margin-top: 15px;
  width: min-content;
  color: ${({ active }) => (active ? "#fff" : "#6276c8")};
  cursor: pointer;
  padding: 15px;
  :hover {
    color: #fff;
  }
`;
export const Weekly = styled.div`
  display: flex;
  font-size: 18px;
  width: min-content;
  color: ${({ active }) => (active ? "#fff" : "#6276c8")};
  cursor: pointer;
  padding: 15px;
  :hover {
    color: #fff;
  }
`;
export const Monthly = styled.div`
  display: flex;
  font-size: 18px;
  width: min-content;
  color: ${({ active }) => (active ? "#fff" : "#6276c8")};
  cursor: pointer;
  padding: 15px;
  :hover {
    color: #fff;
  }
`;
export const CardsContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 0 0 0 20px;
  height: auto;
`;
export const CardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  background-color: ${({ background }) => background};
  align-items: flex-end;
  height: 265px;
  width: 250px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  img {
    position: absolute;
    top: -5px;
    right: 5px;
  }
`;
export const CardBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 250px;
  padding: 28px 24px;
  border-radius: 15px 15px 0 0;
  background-color: #1c1f4a;
  z-index: 1;
  cursor: pointer;
  :hover {
    background-color: #33387a;
  }
`;
export const Title = styled.div`
  display: flex;
  font-weight: 500;
  color: #fff;
`;
export const HeaderCard = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  color: #fff;
  svg {
    cursor: pointer;
  }
`;
export const Hours = styled.h1`
  display: flex;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
  font-size: 56px;
  font-weight: lighter;
  color: #fff;
`;
export const Time = styled.div`
  display: flex;
  font-family: "Rubik", sans-serif;
  color: #fff;
  box-sizing: border-box;
`;
