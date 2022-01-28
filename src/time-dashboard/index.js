import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  Container,
  MenuBox,
  Avatar,
  Info,
  Name,
  ButtonContainer,
  Daily,
  Weekly,
  Monthly,
  Header,
  CardsContainer,
  CardBox,
  Title,
  HeaderCard,
  Hours,
  Time,
  CardContainer,
  MenuItem,
} from "./styled";

const tracking = [
  {
    title: "Work",
    background: "#ff8c66",
    img: "images/icon-work.svg",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
        time: "Yesterday",
      },
      weekly: {
        current: 32,
        previous: 36,
        time: "Last Week",
      },
      monthly: {
        current: 103,
        previous: 128,
        time: "Last Month",
      },
    },
  },
  {
    title: "Play",
    background: "#56c2e6",
    img: "images/icon-play.svg",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
        time: "Yesterday",
      },
      weekly: {
        current: 10,
        previous: 8,
        time: "Last Week",
      },
      monthly: {
        current: 23,
        previous: 29,
        time: "Last Month",
      },
    },
  },
  {
    title: "Study",
    background: "#ff5c7c",
    img: "images/icon-study.svg",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
        time: "Yesterday",
      },
      weekly: {
        current: 4,
        previous: 7,
        time: "Last Week",
      },
      monthly: {
        current: 13,
        previous: 19,
        time: "Last Month",
      },
    },
  },
  {
    title: "Exercise",
    background: "#4acf81",
    img: "images/icon-exercise.svg",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
        time: "Yesterday",
      },
      weekly: {
        current: 4,
        previous: 5,
        time: "Last Week",
      },
      monthly: {
        current: 11,
        previous: 18,
        time: "Last Month",
      },
    },
  },
  {
    title: "Social",
    background: "#7536d3",
    img: "images/icon-social.svg",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
        time: "Yesterday",
      },
      weekly: {
        current: 5,
        previous: 10,
        time: "Last Week",
      },
      monthly: {
        current: 21,
        previous: 23,
        time: "Last Month",
      },
    },
  },
  {
    title: "Self Care",
    background: "#f1c65b",
    img: "images/icon-self-care.svg",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
        time: "Yesterday",
      },
      weekly: {
        current: 2,
        previous: 2,
        time: "Last Week",
      },
      monthly: {
        current: 7,
        previous: 11,
        time: "Last Month",
      },
    },
  },
];

const Dashboard = () => {
  const [selected, setSelected] = useState("Weekly");
  return (
    <Container>
      <MenuBox>
        <Header>
          <Avatar>
            <img src={`images/user.jpg`} />
          </Avatar>
          <Info>
            <p>Report for</p>
            <Name>Nooa Toivonen</Name>
          </Info>
        </Header>
        <ButtonContainer>
          {["Daily", "Weekly", "Monthly"].map((item) => (
            <MenuItem
              key={item}
              onClick={() => setSelected(item)}
              active={selected === item}
            >
              {item}
            </MenuItem>
          ))}
        </ButtonContainer>
      </MenuBox>
      <CardsContainer>
        {tracking.map((cards) => {
          return (
            <Cards
              {...cards}
              key={cards.title}
              selectedTimeframe={selected.toLowerCase()}
            />
          );
        })}
      </CardsContainer>
    </Container>
  );
};

const Cards = (props) => {
  const { timeframes, title, background, img, selectedTimeframe } = props;
  const { current, previous, time } = timeframes[selectedTimeframe];
  return (
    <CardContainer background={background}>
      <img src={img} />
      <CardBox>
        <HeaderCard>
          <Title>{title}</Title>
          <BsThreeDots />
        </HeaderCard>
        <Hours>
          {current}
          {current > 1 ? "hrs" : "hr"}
        </Hours>
        <Time>
          {time} - {previous}
          {previous > 1 ? "hrs" : "hr"}
        </Time>
      </CardBox>
    </CardContainer> // easy :)
  );
};

export default Dashboard;
