export interface BackLinkModel {
  href: string;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}