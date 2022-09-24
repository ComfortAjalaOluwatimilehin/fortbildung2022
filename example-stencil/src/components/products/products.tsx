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
  @State() isFetching: boolean = true;
  async saveProduct(update): Promise<void> {
    if (!update.product_name || Number.isNaN(update.product_price) || Number.isNaN(update.product_stock_count)) {
      alert('Invalid Input');
      return;
    }
    const queryString = `
    mutation {
                createProduct(product_name:"${update.product_name}",product_price:${update.product_price}, product_stock_count:${update.product_stock_count} ){
                  product_name
                }
            }
        `
    await fetch(`http://localhost:4000/graphql?query=${queryString}`, { method: 'POST' });
    
  }
  
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
      this.products = data.data.products.reverse()
    }
    this.isFetching = false;
  }
  componentWillLoad() {
    if(this.products.length > 0) return
    this.fetchProducts();
  }
  render() {
    return (
      <div id="productComponents">
        
        {this.isFetching === false ? (
          <div>
           <product-form product={null} onSave={(product, )=> this.saveProduct(product)}></product-form>
            {this.products.map(product => {
              return (
                <duet-card heading={product.product_name}>
                  <duet-action-button
                    onClick={() => {
                      window.location.href = `/products/${product.product_id}`;
                    }}
                  ></duet-action-button>
                </duet-card>
              );
            })}
          </div>
        ) : (
          <duet-spinner size="small" theme="default"></duet-spinner>
        )}
      </div>
    );
  }
}
