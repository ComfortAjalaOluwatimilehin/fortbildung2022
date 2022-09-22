import { Component, h, State } from '@stencil/core';

export interface IProduct {
  product_id: number;
  product_name: string;
  product_price: number;
  product_stock_count: number;
}
@Component({ tag: 'products-component', styleUrl: './products.css' })
export class ProductsComponent {
  @State() products: Array<IProduct> = [];

  async fetchProducts(): Promise<void> {
    const queryString = `
            {
                products{
                    product_name
                    product_id
                }
            }
        `;
    const response = await fetch(`http://localhost:4000/graphql?query=${queryString}`);
    const data = await response.json();
    if (data.data?.products) {
      this.products = data.data.products
      
    }
  }
  componentWillLoad() {
    this.fetchProducts();
  }
  render() {
    return (
      <div id="productComponents">
        {this.products.map(product => {
          return (
            <duet-card heading={product.product_name}>
               <duet-action-button onClick={() => {
                    window.location.href =`/products/${product.product_id}`
               }}></duet-action-button>
            </duet-card>
          );
        })}
      </div>
    );
  }
}
