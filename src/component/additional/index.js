import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Additional(properties) {
  return (
    <Box className="additional" shadow>
      <Heading border>Additional Properties</Heading>

      <List {...properties} />
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkin_instructions,
}) {
  return (
    <ul className="additional__list">
      <ListItem title="House Rules:">
        <span>{house_rules}</span>
      </ListItem>
      <ListItem title="Cancelation Policy:">
        <span>{cancellation_policy}</span>
      </ListItem>
      <ListItem title="Local Transportation:">
        <span>{local_transportation}</span>
      </ListItem>
      <ListItem title="Host Languages:">
        <span>{host_languages.toString()}</span>
      </ListItem>
      <ListItem title="Special Offers:">
        <span>{special_offers}</span>
      </ListItem>
      <ListItem title="Check-In Instructions:">
        <span>{checkin_instructions}</span>
      </ListItem>
    </ul>
  );
}
