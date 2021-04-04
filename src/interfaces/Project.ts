import Link from "interfaces/Link";

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
  titleColor: string;
}
