import { Menu } from './Menu';

export class Restaurant {
  id: number;
  restaurantName: string;
  starsNum: string;
  description: string;
  image: string;
  infos: string[];
  menu: Menu[];

  constructor(
    id: number,
    restaurantName: string,
    starsNum: string,
    description: string,
    image: string,
    infos: string[],
    menu: Menu[]
  ) {
    this.id = id;
    this.restaurantName = restaurantName;
    this.starsNum = starsNum;
    this.description = description;
    this.image = image;
    this.infos = infos;
    this.menu = menu;
  }
}
