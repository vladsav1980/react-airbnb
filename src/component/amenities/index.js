import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool_logo from "./pool.svg";
import gym_logo from "./gym.svg";
import breakfast_logo from "./breakfast.svg";
import wifi_logo from "./wifi.svg";
import parking_logo from "./parking.svg";
import pets_logo from "./pets.svg";
import shuttle_logo from "./shuttle.svg";
import concierge_logo from "./concierge.svg";
import roomservice_logo from "./roomservice.svg";
import child_logo from "./child.svg";

export default function Amenities(amenities) {
  return (
    <Box className="amenities" shadow>
      <Heading border>Amenities</Heading>

      <List {...amenities} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenities__list">
      {hasPool && (
        <ListItem imageSrc={pool_logo}>
          <span>Pool</span>
        </ListItem>
      )}
      {hasGym && (
        <ListItem imageSrc={gym_logo}>
          <span>Gym</span>
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imageSrc={breakfast_logo}>
          <span>Free Breakfast</span>
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imageSrc={wifi_logo}>
          <span>Free WiFi</span>
        </ListItem>
      )}
      {hasParking && (
        <ListItem imageSrc={parking_logo}>
          <span>Free Parking</span>
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={pets_logo}>
          <span>Pets Allowed</span>
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={shuttle_logo}>
          <span>Airport Shuttle</span>
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={concierge_logo}>
          <span>Concierge Service</span>
        </ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc={roomservice_logo}>
          <span>Room Service</span>
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={child_logo}>
          <span>Child Friendly</span>
        </ListItem>
      )}
    </ul>
  );
}
