import Project from "../models/Project";

export const projectData: Project[] = [
  {
    title: "HelloCampus",
    date: "2020",
    image: "/assets/HelloCampus.jpg",
    image2x: "/assets/HelloCampus@2x.jpg",
    description:
      "HelloCampus is a platform which allows students to share and discover events across their college campus. I developed the native iOS app, web client, and backend.",
    subtitleDescription:
      "Swift 5, UIKit, Google Cloud Platform (Firestore, Cloud Functions, Auth), Node.js, TypeScript, React JS, Kotlin, Jetpack",
    isWide: true,
    titleColor: "#2e7df6",
  },
  {
    title: "Turtle Fly",
    date: "2016",
    image: "/assets/TurtleFlyOld.png",
    description:
      "Turtle Fly was #1 in the App Store in 2011. I aquired it in 2016 and grew the downloads by 500% and the revenue by 700% over the previous year.",
    subtitleDescription: "Objective-C, Cocos2D, MRC, monolithic",
    isWide: false,
    titleColor: "#43A047",
  },
  {
    title: "Turtle Fly 2",
    date: "2017",
    image: "/assets/TurtleFly.png",
    description:
      "Turtle Fly 2 is a ground-up rewrite of the original. It features an overhauled physics engine, high-res graphics, and improved modularity and code reusability.",
    subtitleDescription: "Objective-C, SpriteKit, ARC, MVC",
    isWide: false,
    titleColor: "#43A047",
  },
  {
    title: "HelloCRM",
    date: "2019",
    image: "/assets/HelloCRM.jpg",
    image2x: "/assets/HelloCRM@2x.jpg",
    description:
      "A modern CRM that runs right on your phone. It takes full advantage of the Apple ecosystem to make managing your network a breeze.",
    subtitleDescription: "Swift 5, Google Cloud Platform, Stripe",
    isWide: true,
    titleColor: "#2e7df6",
  },
  {
    title: "HelloStudios LLC",
    date: "2018-2020",
    image: "/assets/HelloStudios.png",
    description:
      "I co-founded HelloStudios to create and maintain eco-friendly websites. We developed and hosted 18 websites, reaching over two million people.",
    subtitleDescription: "Wordpress, Cloudflare, Graphic Design",
    isWide: true,
    titleColor: "#2e7df6",
  },
  {
    title: "Portfolio Site",
    date: "2020",
    image: "/assets/reeceApp.png",
    image2x: "/assets/reeceApp@2x.png",
    description:
      "This website was designed to communicate my past work as clearly as possible.",
    subtitleDescription: "React.js, Next.js, TypeScript, Cloudflare",
    isWide: false,
    titleColor: "#2e7df6",
  },
  {
    title: "Yeats",
    date: "2020",
    image: "/assets/yeats.png",
    image2x: "/assets/yeats@2x.png",
    description:
      "I developed a native iOS app which communicated with AWS to generate low-cost meal plans over any given week. Ingredient prices and availability was collected by web scraping.",
    subtitleDescription: "Swift 5, AWS (Lambda, Aurora), Public Speaking",
    isWide: false,
    titleColor: "#ec4e3d",
  },
  {
    title: "The Guinea Pig",
    date: "2010",
    image: "/assets/guineaPig.jpg",
    image2x: "/assets/guineaPig@2x.jpg",
    description:
      "This is the worst code I have ever written. It's also the first code I ever wrote. When I was ten I wanted to create a guinea pig in Minecraft, so I taught myself Java. This was when I fell in love with software.",
    subtitleDescription: "Java, Blender, Minecraft",
    isWide: false,
    titleColor: "#2e7df6",
  },
];
