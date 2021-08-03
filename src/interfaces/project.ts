import Link from "interfaces/link";

export default interface Project {
  title: string;
  date: string;
  image: string;
  width: number;
  height: number;
  description: string;
  subtitleDescription?: string;
  links?: Link[];
  isWide: boolean;
  isWebScreenshot?: boolean;
  titleColor: string;
}
