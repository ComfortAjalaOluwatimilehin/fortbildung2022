import { Component, h, Prop, State } from '@stencil/core';
import { IProduct } from './products';

@Component({ tag: 'product-component', styleUrl: './product.css' })
export class ProductComponent {
  @Prop() match!: any;

  @Prop() id: string = this.match.params.id;

  @State() isDeleted: boolean = false;

  @State() product!: IProduct;
  async sendQuery(queryString: string, method:string): Promise<any> {
    const data = await (await fetch(`http://localhost:4000/graphql?query=${queryString}`,{method})).json();
    return data;
  }
  async saveProduct(update): Promise<void> {
    if (!update.product_name || Number.isNaN(update.product_price) || Number.isNaN(update.product_stock_count)) {
      alert('Invalid Input');
      return;
    }
    const queryString = `
    mutation {
                updateProduct(product_id:${update.product_id},product_name:"${update.product_name}",product_price:${update.product_price}, product_stock_count:${update.product_stock_count} ){
                  product_name
                }
            }
        `
    await fetch(`http://localhost:4000/graphql?query=${queryString}`, { method: 'POST' });
    
  }
  async deleteProductById(): Promise<void> {
    const queryString = `
        
    mutation {
                deleteProduct(product_id:${this.product.product_id}){
                  product_name
                }
            }
        


        `;
    await this.sendQuery(queryString, "POST");
    this.isDeleted = true;
  }
  async fetchProductById(): Promise<void> {
    const queryString = `
        
             {
                getProduct(product_id:${this.id}){
                    product_id
                    product_name
                    product_price
                    product_stock_count
                }
            }
        


        `;

    const data = await this.sendQuery(queryString, "GET");

    this.product = data.data.getProduct;
  }

  componentWillLoad() {
    if(this.product) return;
    this.fetchProductById();
  }
  
  render() {
    return (
      <div id="productContainer">
        <product-form product={this.product} onSave={(update) => {
this.saveProduct(update)
        }}></product-form>
        <br />
        <duet-icon
          class="return-button"
          size="small"
          background="category-family"
          name="action-arrow-left"
          onClick={() => {
            window.location.href = '/products';
          }}
        ></duet-icon>
        {this.product ? (
          <div id="product">
            <duet-heading level="h4">{this.product.product_name}</duet-heading>
            <b>{this.product.product_price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</b>
            <p>Stock: {this.product.product_stock_count}</p>

            {this.isDeleted ? (
             <span class="isdeleted">Deleted</span>
            ) : (
              <duet-icon
                size="small"
                color="red"
                name="action-delete"
                onClick={() => {
                  this.deleteProductById()
                }}
              ></duet-icon>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
