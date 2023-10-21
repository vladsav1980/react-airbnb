import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guests_logo from "./guests.svg";
import bedrooms_logo from "./bedrooms.svg";
import beds_logo from "./beds.svg";
import baths_logo from "./baths.svg";

export default function Details(details) {
  return (
    <Box className="details" shadow>
      <Heading border>Details</Heading>

      <List {...details} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc={guests_logo}>
        <span>{guests}</span>
        <span>{guests === 1 ? "guest" : "guests"}</span>
      </ListItem>
      <ListItem imageSrc={bedrooms_logo}>
        <span>{bedrooms}</span>
        <span>{bedrooms === 1 ? "bedroom" : "bedrooms"}</span>
      </ListItem>
      <ListItem imageSrc={beds_logo}>
        <span>{beds}</span>
        <span>{beds === 1 ? "bed" : "beds"}</span>
      </ListItem>
      <ListItem imageSrc={baths_logo}>
        <span>{baths}</span>
        <span>{baths === 1 ? "bath" : "baths"}</span>
      </ListItem>
    </ul>
  );
}
