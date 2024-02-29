import React, { useEffect, useState } from "react";

export function ChannelsPage() {
  let [channelImage, setChannelImage] = useState(null);

useEffect(() => {
  const fetchChannels = async () => {
    const response = await fetch("https://api.sr.se/api/v2/channels/?format=json");
    const channels = await response.json();
    console.log(channels);
   
    setChannelImage(channels.image);
  };
  fetchChannels();
}, []);


  return (
    <div>
      <div className="currently-played-item"></div>
      <div className="channels-container">
        <div className="channel">
            {channelImage && <img alt="img"src={channelImage} />}
        </div>
      </div>
    </div>
  );
}

export default ChannelsPage;
function data(value: void): void | PromiseLike<void> {
    throw new Error("Function not implemented.");
}

