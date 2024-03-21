import type { Image } from "sanity";

export interface ProductInterface {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  ratings: number;
  position: string;
  title: string;
  price: number;
  image: Image;
  isnew: boolean;
  category: Category[];
  rowprice: number;
  brand: string;
  body: Body[];
  quantity: number;
  description: string;
  slug: Slug;
}

interface Slug {
  current: string;
  _type: string;
}

interface Body {
  markDefs: any[];
  children: Child[];
  _type: string;
  style: string;
  _key: string;
  level?: number;
  listItem?: string;
}

interface Child {
  _type: string;
  marks: string[][];
  text: string;
  _key: string;
}

interface Category {
  _ref: string;
  _type: string;
  _key: string;
}
