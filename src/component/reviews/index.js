import Heading from "../heading";
import { Fragment } from "react";
import "./index.css";
import Box from "../box";

export default function Reviews({ list }) {
  return (
    <div className="review__block">
      <Heading>Guest Reviews</Heading>
      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName: name, rating, review }) {
  return (
    <Box className="review">
      <div className="review__heading">
        <span className="review__title">{name}</span>
        <span className="review__rating">Rating: {rating}</span>
      </div>
      <span className="review__text">{review}</span>
    </Box>
  );
}
