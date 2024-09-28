export interface ICard {
  id: string;
  title: string;
  expand: boolean;
  children: ICardChild[];
}

export interface ICardChild {
  id: string;
  title: string;
  account: string;
  password: string;
}
