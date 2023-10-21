import Heading from "../heading";
import "./index.css";

export default function Contact({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact__heading">
        <img src={image} alt={name} className="image" />
        <div className="contact__block">
          <Heading>Host - {name}</Heading>
          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>
            <span className="contact__sub-value">{response_time}</span>
            <span className="contact__sub-value">
              {response_rate}% response rate
            </span>
          </div>
        </div>
      </div>
      <div>{info}</div>
    </div>
  );
}
