export interface IRoute {
  id: number;
  name: string;
  path: string;
}
export interface IChannelsData {
  channels: IChannel[];
  pagination: IPagination;
}

export interface IChannel {
  id: number;
  image: string;
  imagetemplate: string;
  tagline: string;
  color: string;
  siteurl: string;
  liveaudio: {};

}

interface IPagination {
  // ..attribut här
}
