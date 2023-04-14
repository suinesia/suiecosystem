/* eslint-disable sonarjs/no-duplicate-string */
import type { Network } from "../src/models/component";

import type { Tag } from "./tag";

export interface SocialMetrics {
  date: number;
  socialActivity: number;
  tweetWithSuiindonesia: number;
  twitterCount: number;
  twitterFollower: number;
}

export interface Project {
  id: string;
  name: string;
  shortName: string;
  description: string;
  tags: string[];
  image: string;
  network: Network;
  isLive: boolean;
  isTestnetLive: boolean;
  token?: string;
  technologies?: any;
  socialMetrics?: SocialMetrics;
}

export interface ProjectItf extends Project {
  tagsRef: Tag[];
}

export const allProjects: Array<Project> = [
  {
    id: "68b1e6d3-5c80-48f6-8917-7d8563294d3b",
    name: "Cetus-Protocol",
    shortName: "CETUS",
    description:
      "Cetus is a pioneer DEX and concentrated liquidity protocol built on Sui.",
    tags: ["AMM/DEX"],
    image: "cetus.png",
    network: {
      website: "https://www.cetus.zone/",
      github: "https://github.com/CetusProtocol",
      twitter: "https://twitter.com/CetusProtocol",
      blog: "",
      discord: "https://discord.gg/cetusprotocol",
      telegram: "https://t.me/cetuscommunity",
    },
    isDevnetLive: false,
    isTestnetLive: true,
  },
  
    {

    id: "c90aacd0-dcb7-48f8-93c6-0f9339fdd203",
    name: "Aftermath-Finance",
    shortName: "AFTERMATH",
    description:
      "Aftermath is building an all-in-one platform for trading, investing, and earning yield that is fast, inexpensive, and fully transparent",
    tags: ["AMM/DEX"],
    image: "aftermath.png",
    network: {
      website: "https://aftermath.finance/",
      github: "https://github.com/AftermathFinance",
      twitter: "https://twitter.com/AftermathFi",
      blog: "",
      discord: "https://discord.gg/VFqMUqKHF3",
      telegram: "",
    },
    isDevnetLive: false,
    isTestnetLive: true,
  },
  ];
