import Project from "../models/Project";

export const projectData: Project[] = [
  {
    title: "HelloCampus",
    image: "/assets/HelloCampusHero.png",
    description:
      "This is my biggest project to date. HelloCampus helps students share and discover events across their college campus. One of its core features is a beautiful native iOS app written in Swift.",
    subtitle: "Technology Used",
    subtitleDescription:
      "Swift 5, Google Cloud Platform (Firestore, Cloud Functions, Auth), Node.js, TypeScript, Cocoapods",
    isWide: true,
    titleColor: "#0064E9",
  },
  {
    title: "Turtle Fly",
    image: "/assets/TurtleFlyOld.png",
    description:
      "Turtle Fly was #1 in the App Store in 2011. I aquired it in 2016 and grew the downloads by 500% and the revenue by 700% organically.",
    subtitle: "Technology Used",
    subtitleDescription: "Objective-C, Cocos2D, MRC",
    isWide: false,
    titleColor: "#27ae60",
  },
  {
    title: "Turtle Fly 2",
    image: "/assets/TurtleFly.png",
    description:
      "Turtle Fly 2 is a ground-up rewrite of the original. It features an overhauled physics engine, high-res graphics, and improved modularity and code reusability.",
    subtitle: "Technology Used",
    subtitleDescription: "Objective-C, SpriteKit, ARC",
    isWide: false,
    titleColor: "#27ae60",
  },
  {
    title: "HelloStudios LLC",
    image: "/assets/HelloStudios.png",
    description:
      "I co-founded HelloStudios to create and maintain eco-friendly websites. We developed and hosted 18 websites, reaching over two million people.",
    subtitle: "Technology Used",
    subtitleDescription: "Wordpress, Cloudflare, Graphic Design",
    isWide: true,
    titleColor: "#8e44ad",
  },
  {
    title: "Portfolio Site",
    image: "/assets/HelloStudios.png",
    description:
      "This portfolio site was designed to communicate my past work as clearly as possible, and the design language is meant to reflect that.",
    subtitle: "Technology Used",
    subtitleDescription: "React.js, Next.js, TypeScript, Cloudflare",
    isWide: false,
    titleColor: "#0064E9",
  },
  {
    title: "Yeats",
    image: "/assets/HelloStudios.png",
    description: "Yeats",
    subtitle: "Technology Used",
    subtitleDescription: "Swift 5, AWS (Lambda, Aurora), Public Speaking",
    isWide: false,
    titleColor: "#0064E9",
  },
];
