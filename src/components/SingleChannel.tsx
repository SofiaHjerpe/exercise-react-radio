import { useNavigate } from "react-router-dom";
import { IChannel } from "../interfaces";

interface ISingleChannelProps {
  channel: IChannel;
}

export function SingleChannel({ channel }: ISingleChannelProps) {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/programs");
  }
  return (
    <>
      <div  className="channel">
        <p>{channel.siteurl}</p>
      
        <div className="channel-image-container">
          <img className="image" src={channel.image} alt="" />
          <img className="image" src={channel.imagetemplate} alt="img" />
        </div>
        <a onClick={handleOnClick}>programs</a>
        <p className="text">{channel.tagline}</p>
      </div>
    </>
  );
}
