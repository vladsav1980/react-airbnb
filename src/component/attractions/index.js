import "./index.css";

import Box from "../box";
import { Fragment } from "react";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Attractions({ list }) {
  return (
    <Box className="additional" shadow>
      <Heading border>Nearby Attractions</Heading>
      <div className="additional__list">
        {list.map(({ id, name, link }) => (
          <Fragment key={id}>
            <ListItem>
              <a href={link}>{name}</a>
            </ListItem>
          </Fragment>
        ))}
      </div>
    </Box>
  );
}
