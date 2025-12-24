
export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  top: string; // percentage for positioning
  left: string; // percentage for positioning
}

export interface FooterLink {
  name: string;
  url: string;
  icon?: string;
}
