/**
 * Interface representing a product
 */
export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: Rating
}

/**
 * Interface representing the rating of a product
 */
export interface Rating {
  rate: number,
  count: number
}
