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

export interface IProgramData {
  id: number;
  programs: IProgram[];
}

export interface IProgram {
  id: number;
  description: string;
  broadcastinfo: string;
  email: string;
  phone: string;
  programurl: string;
  programslug: string;
  programimage: string;
  programimagetemplate: string;
  programimagewide: string;
  programimagetemplatewide: string;
  socialimage: string;
  socialimagetemplate: string;
}
export interface ISingleProgramData {
  id: number;
  program: IProgram;
}
export interface IScheduleData {
  id: number;
  schedule: ISchedule[];
}
export interface ISchedule {
  id: number;
  title: string;
  description: string;
  imageurltemplate: string;
}
export interface IProgramCategory {
  id: number;
  programcategories: ICategory[];
}
export interface ICategory {
  id: number;
  name: string;
}

interface IPagination {
  // ..attribut här
}

/* 
Varje program returneras som ett item med ett namn (title), beskrivning (description), sändningstider (broadcastinfo), kontaktinformation (email samt phone), logotyp (socialimage) och en lista med länkar till sociala medier (socialmediaplatforms). Varje item har attributet archived som anger om programmet är arkiverat (archived="1") eller fortfarande sänds (archived="0").
Med ondemand anges om ett program har några sändningar (ondemand hasOndemand="1") eller inte (ondemand hasOndemand="0"). Sändningar finns endast tillgängliga i 30 dagar. Elementet haspod anger om programmet har ett tillhörande poddflöde. Om denna är satt till true, kan man hämta upp programmets poddflöde separat (se lista poddfiler).
*/
