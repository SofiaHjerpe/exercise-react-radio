import { Link } from "react-router-dom";
import { IChannel } from "../interfaces";

interface ISingleChannelProps {
  channel: IChannel;
}

export function SingleChannel({ channel }: ISingleChannelProps) {
  return (
    <>
      <div className="card">
        <p>{channel.siteurl}</p>

        <div className="channel-image-container">
          <img className="image" src={channel.image} alt="" />
          <img className="image" src={channel.imagetemplate} alt="img" />
        </div>
        <Link to={`/programs/${channel.liveaudio.id}`}>To programs</Link>

        <p className="text">{channel.tagline}</p>
      </div>
    </>
  );
}
