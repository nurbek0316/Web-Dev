export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url:string;
  img:string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 11',
    price: 799,
    description: 'Apple iPhone 11 128Gb черный',
    url:`https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item`,
    img:`https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/ha5/33278501191710/apple-iphone-12-128gb-cernyj-100656960-1-Container.jpg`
  },
  {
    id: 2,
    name: 'Apple iPhone 12',
    price: 699,
    description: 'Apple iPhone 12 128Gb черный',
    url:`https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=750000000#!/item`,
    img:`https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/ha5/33278501191710/apple-iphone-12-128gb-cernyj-100656960-1-Container.jpg`
  },
  {
    id: 3,
    name: 'Apple iPhone 13',
    price: 299,
    description: 'Apple iPhone 13 128Gb черный',
    url:`https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item`,
    img: `https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc2/h05/46392662458398/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg`
  }
];