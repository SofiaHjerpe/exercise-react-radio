import { ReactElement } from "react";
import { IChannel } from "../interfaces";
import { SingleChannel } from "./SingleChannel";

interface IChannelProps {
  channels: IChannel[];
}

export function Channel({ channels }: IChannelProps): ReactElement {
  const channelsFirstRow = channels.slice(0, 3);
  const channelsSecondRow = channels.slice(3, 6);
  const channelsThirdRow = channels.slice(6, 9);
  return (
    <>
      <section className="channels">
        <div className="channels-row">
          {channelsFirstRow.map((channel) => (
            <SingleChannel channel={channel} key={channel.id} />
          ))}
        </div>
        <div className="channels-row">
          {channelsSecondRow.map((channel) => (
            <SingleChannel channel={channel} key={channel.id} />
          ))}
        </div>
        <div className="channels-row">
          {channelsThirdRow.map((channel) => (
            <SingleChannel channel={channel} key={channel.id} />
          ))}
        </div>
      </section>
    </>
  );
}
