export default interface Project {
  title: string;
  date: string;
  image: string;
  width: number;
  height: number;
  description: string;
  subtitleDescription?: string;
  link?: string;
  linkText?: string;
  isWide: boolean;
  titleColor: string;
}
