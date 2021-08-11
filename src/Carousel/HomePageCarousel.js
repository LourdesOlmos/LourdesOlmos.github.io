import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Carusel1 from '../assets/img/home_1.jpg';
import Carusel2 from '../assets/img/home_2.jpg';
import Carusel3 from '../assets/img/home_2.jpg';

import { useHistory } from "react-router";

function HomePageCarousel(props) {
  var items = [
    {
      img: Carusel1,
      name: "All Clothes of Bigests Company",
      description: "Best Shoes,",
      btntitle: "Women Shoes",
    },
    {
      img: Carusel2,
      name: "Click on button to see our Best Prices",
      description: "Hello World!",
      btntitle: "Men Shoes",
    },
    {
      img: Carusel3,
      name: "Click on button to see our Best Prices",
      description: "Hello World!",
      btntitle: "Men Shoes",
    },
  ];

  return (
    <Carousel className="carousel">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const { push } = useHistory();
  return (
    <Paper>
      <img src={props.item.img} width="1500px" height="700px" alt="" />
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <Button
        variant="contained"
        className="BtnInCarusel"
        onClick={() => push("/men/shoes")}
        style={{ background: "white" }}
      >
        {props.item.btntitle}
      </Button>
      {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
    </Paper>
  );
}

export default HomePageCarousel;
