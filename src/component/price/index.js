import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

export default function Price({ price, discount, currency, ...rest }) {
  return (
    <Box className="price">
      <div className="price__header">
        <span
          className={`price__value ${
            discount ? "price__value--has-discount" : ""
          }`}
        >
          {currency}
          {price}
        </span>
        {discount && (
          <span className={`price__value`}>
            {currency}
            {discount}
          </span>
        )}
      </div>

      <List currency={currency} {...rest} />
    </Box>
  );
}

function List({ currency, cleaning = 0, service = 0, checkin, checkout }) {
  return (
    <ul className="price__list">
      <ListItem>
        <span>Cleaning fee:</span>
        <span>
          {currency} {cleaning}
        </span>
      </ListItem>
      <ListItem>
        <span>Service fee:</span>
        <span>
          {currency} {service}
        </span>
      </ListItem>
      <ListItem>
        <span>Arrival date:</span>
        <span>{checkin}</span>
      </ListItem>
      <ListItem>
        <span>Departure date:</span>
        <span>{checkout}</span>
      </ListItem>
    </ul>
  );
}
