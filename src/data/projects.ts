import type Project from "interfaces/project";

export const projects: Project[] = [
  {
    title: "HelloPeople",
    date: "2020",
    image: "/assets/HelloPeople.png",
    width: 622,
    height: 350,
    description:
      "I developed the entire HelloPeople platform including the serverless backend, web app, and native iOS app. HelloPeople allows students to share and discover events across their college campus.",
    subtitleDescription:
      "Swift 5, UIKit, Google Cloud Platform (Firestore, Cloud Functions, Auth), TypeScript, React.js, Next.js, Node.js",
    links: [{ name: "Source code", url: "https://github.com/hellopeople-io" }],
    isWide: true,
    titleColor: "#0069c0",
  },
  {
    title: "Turtle Fly",
    date: "2016",
    image: "/assets/TurtleFlyOld.png",
    width: 350,
    height: 350,
    description:
      "Turtle Fly was #1 in the App Store in 2011. I acquired it in 2016 and grew the downloads by 500% and the revenue by 700% over the previous year.",
    subtitleDescription: "Objective-C, Cocos2D, MRC, monolithic",
    isWide: false,
    titleColor: "#388e3c",
  },
  {
    title: "Turtle Fly 2",
    date: "2017",
    image: "/assets/TurtleFly.png",
    width: 173,
    height: 350,
    description:
      "Turtle Fly 2 is a ground-up rewrite of the original. It features a new physics and render engine, high-res graphics, and maintainable programming patterns.",
    subtitleDescription: "Objective-C, SpriteKit, ARC, MVC",
    isWide: false,
    titleColor: "#388e3c",
  },
  {
    title: "HelloCRM",
    date: "2019",
    image: "/assets/HelloCRM.png",
    width: 622,
    height: 350,
    description:
      "A modern CRM that takes full advantage of the Apple ecosystem to make managing your network a breeze.",
    subtitleDescription:
      "Swift 5, Google Cloud Platform (Firestore, Cloud Functions, Auth), Stripe",
    isWide: true,
    titleColor: "#0069c0",
  },
  {
    title: "When to Greet",
    date: "2021",
    image: "/assets/when-to-greet.png",
    width: 976,
    height: 880,
    description: "Find the best time for a group of people to get together.",
    subtitleDescription:
      "TypeScript, React.js, Next.js, Google Cloud Platform (Firestore, Cloud Functions, Auth)",
    links: [
      { name: "Source Code", url: "https://github.com/Xhale1/when-to-greet" },
    ],
    isWide: false,
    isWebScreenshot: true,
    titleColor: "#0069c0",
  },
  {
    title: "HelloStudios LLC",
    date: "2018-2020",
    image: "/assets/HelloStudios.png",
    width: 700,
    height: 350,
    description:
      "I developed and hosted 18 websites serving over two million people under a company I co-founded.",
    subtitleDescription:
      "Wordpress, Cloudflare, Graphic Design (Adobe Photoshop, Illustrator, and InDesign)",
    links: [{ name: "One of my sites", url: "https://lensfirefilms.com/" }],
    isWide: false,
    titleColor: "#0069c0",
  },
  {
    title: "HelloSoftware",
    date: "2020-2021",
    image: "/assets/HelloStudios.png",
    width: 700,
    height: 350,
    description: "Sharing open source templates and boilerplates.",
    subtitleDescription: "Open source, GitHub, React.js, Next.js, Electron",
    links: [{ name: "GitHub", url: "https://github.com/hellosoftware-io" }],
    isWide: false,
    titleColor: "#512DA8",
  },
  {
    title: "Portfolio Site",
    date: "2020",
    image: "/assets/reeceApp.png",
    width: 350,
    height: 350,
    description:
      "This website was designed to communicate my past work as clearly as possible.",
    subtitleDescription: "React.js, Next.js, TypeScript, Cloudflare",
    links: [
      { name: "Source code", url: "https://github.com/Xhale1/portfolio-site" },
    ],
    isWide: false,
    titleColor: "#0069c0",
  },
  {
    title: "Yeats",
    date: "2020",
    image: "/assets/yeats.png",
    width: 175,
    height: 350,
    description:
      "Won the 2020 Santa Clara University Hack for Humanity. I developed a native iOS app which communicated with AWS to generate low-cost meal plans over any given week.",
    subtitleDescription:
      "Swift 5, UIKit, AWS (Lambda, Aurora), Public Speaking",
    isWide: false,
    titleColor: "#d32f2f",
  },
  {
    title: "The Guinea Pig",
    date: "2010",
    image: "/assets/guineaPig.jpg",
    width: 262.5,
    height: 350,
    description:
      "This is without a doubt the worst code I have ever written. When I was 10 I wanted to add a guinea pig to my favorite video game Minecraft, so I taught myself Java. One long summer later I finished my first software project, and I had my guinea pig.",
    subtitleDescription: "Java, Blender, Minecraft",
    isWide: false,
    titleColor: "#0069c0",
  },
];
