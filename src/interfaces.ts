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
  liveaudio: { id: number };
}

export interface IProgram {
  id: number;
  title: string;
  description: string;
  broadcastinfo: string;
  programurl: string;
  email: string;
  phone: string;
  programimage: string;
  socialimage: string;
  socialimagetemplate: string;
}
interface IPagination {
  // ..attribut här
}

/* 
Varje program returneras som ett item med ett namn (title), beskrivning (description), sändningstider (broadcastinfo), kontaktinformation (email samt phone), logotyp (socialimage) och en lista med länkar till sociala medier (socialmediaplatforms). Varje item har attributet archived som anger om programmet är arkiverat (archived="1") eller fortfarande sänds (archived="0").
Med ondemand anges om ett program har några sändningar (ondemand hasOndemand="1") eller inte (ondemand hasOndemand="0"). Sändningar finns endast tillgängliga i 30 dagar. Elementet haspod anger om programmet har ett tillhörande poddflöde. Om denna är satt till true, kan man hämta upp programmets poddflöde separat (se lista poddfiler).
*/
