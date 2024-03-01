import React, { useEffect, useState } from "react";
import { IChannel, IChannelsData } from "../interfaces";
import { Channel } from "../components/Channel";

const ChannelsPage = () => {
  const [channelsFirst, setChannel] = useState<IChannel[]>([]);

  const fetchChannels = async () => {
    const response = await fetch("https://api.sr.se/api/v2/channels/?format=json");
    const channelsObject: IChannelsData = await response.json();

    const channels: IChannel[] = channelsObject.channels;
    setChannel(channels);
  };
  useEffect(() => {
    fetchChannels();
  }, []);
  return (
    <div>
      <div className="currently-played-item"></div>
      <div className="channels-container">
        <h1 className="heading">Channels</h1>
        <Channel channels={channelsFirst} />
      </div>
    </div>
  );
};

export default ChannelsPage;
