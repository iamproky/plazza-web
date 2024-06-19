export interface Product {
  id: number
  name: string
  brand: string
  model: string
  price: number
  size: number
  color: string
  stock: number
  createdAt: Date
  updatedAt: Date
}


export interface Products extends Array<Product> {}
