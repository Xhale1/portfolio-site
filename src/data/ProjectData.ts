import Project from "../models/Project";

export const projectData: Project[] = [
  {
    title: "HelloCampus",
    date: "2020",
    image: "/assets/HelloCampus.jpg",
    width: 622,
    height: 350,
    description:
      "HelloCampus allows students to share and discover events across their college campus. I developed the backend and the native iOS, Android, and web apps.",
    subtitleDescription:
      "Swift 5, UIKit, Google Cloud Platform (Firestore, Cloud Functions, Auth), TypeScript, React JS, Node.js, Kotlin, Android Jetpack",
    isWide: true,
    titleColor: "#2e7df6",
  },
  {
    title: "Turtle Fly",
    date: "2016",
    image: "/assets/TurtleFlyOld.png",
    width: 350,
    height: 350,
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
    width: 350,
    height: 350,
    description:
      "Turtle Fly 2 is a ground-up rewrite of the original. It features a new physics and render engine, high-res graphics, and maintainable programming patterns.",
    subtitleDescription: "Objective-C, SpriteKit, ARC, MVC",
    isWide: false,
    titleColor: "#43A047",
  },
  {
    title: "HelloCRM",
    date: "2019",
    image: "/assets/HelloCRM.jpg",
    width: 622,
    height: 350,
    description:
      "A modern CRM that takes full advantage of the Apple ecosystem to make managing your network a breeze.",
    subtitleDescription:
      "Swift 5, Google Cloud Platform (Firestore, Cloud Functions, Auth), Stripe",
    isWide: true,
    titleColor: "#2e7df6",
  },
  {
    title: "HelloStudios LLC",
    date: "2018-2020",
    image: "/assets/HelloStudios.png",
    width: 700,
    height: 350,
    description:
      "I co-founded HelloStudios to create and maintain eco-friendly websites. We developed and hosted 18 websites serving over two million people.",
    subtitleDescription:
      "Wordpress, Cloudflare, Graphic Design (Adobe Photoshop, Illustrator, and InDesign)",
    isWide: true,
    titleColor: "#2e7df6",
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
    isWide: false,
    titleColor: "#2e7df6",
  },
  {
    title: "Yeats",
    date: "2020",
    image: "/assets/yeats.png",
    width: 175,
    height: 350,
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
    width: 262.5,
    height: 350,
    description:
      "This is without a doubt the worst code I have ever written. When I was 10 I wanted to add a guinea pig to my favorite video game Minecraft, so I taught myself Java. One long summer later I finished my first software project, and I had my guinea pig.",
    subtitleDescription: "Java, Blender, Minecraft",
    isWide: false,
    titleColor: "#2e7df6",
  },
];
