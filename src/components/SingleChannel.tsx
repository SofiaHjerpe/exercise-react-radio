import { Link } from "react-router-dom";
import { IChannel } from "../interfaces";

interface ISingleChannelProps {
  channel: IChannel;
}

export function SingleChannel({ channel }: ISingleChannelProps) {
  return (
    <>
      <div className="card">

        <div className="channel-image-container">
          <img className="image" src={channel.image} alt="" />
        </div>
        <Link className="link" to={`/programs/programsInChannel/${channel.liveaudio.id}`}>
          Programs
        </Link>

        <p className="text">{channel.tagline}</p>
      </div>
    </>
  );
}
