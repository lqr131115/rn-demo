export interface ICard {
  id: string;
  title: string;
  children: ICardChild[];
  [key: string]: any;
}

export interface ICardChild {
  id: string;
  title: string;
  account: string;
  password: string;
  [key: string]: any;
}
