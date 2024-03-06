import { ReactElement } from "react";
import { IChannel } from "../interfaces";
import { SingleChannel } from "./SingleChannel";

interface IChannelProps {
  channels: IChannel[];
}

export function Channel({ channels }: IChannelProps): ReactElement {
  return (
    <>
      <section className="channelsAndPrograms">
        <div className="channelsAndPrograms-row">
          {channels.map((channel, index) =>
            index < 3 ? <SingleChannel channel={channel}  key={channel.id} /> : null
          )}
        </div>
        <div className="channelsAndPrograms-row">
          {channels.map((channel, index) =>
            index < 7 && index > 3 ? (
              <SingleChannel channel={channel}  key={channel.id} />
            ) : null
          )}
        </div>
        <div className="channelsAndPrograms-row">
          {channels.map((channel, index) =>
            index < 10 && index > 6 ? (
              <SingleChannel channel={channel}  key={channel.id} />
            ) : null
          )}
        </div>
      </section>
    </>
  );
}
