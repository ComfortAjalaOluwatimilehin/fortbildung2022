import { Component, h, Prop, State } from '@stencil/core';
import { IProduct } from './products';

@Component({ tag: 'product-form' })
export class ProductForm {
  @Prop() formIsDisabled: boolean = false;
  @Prop() onSave: (update: IProduct) => any;
  @Prop() product!: IProduct;
  @State() activeProduct: IProduct = {} as IProduct;

  componentWillLoad() {
    this.activeProduct = { ...this.product };
  }
  render() {
    return (
      <div id="product-form">
        <duet-input
          disabled={this.formIsDisabled}
          type="text"
          value={this.activeProduct.product_name}
          required
          label="Product name"
          placeholder="Type in product name"
          onDuetChange={e => {
            this.activeProduct.product_name = e.target.value;
          }}
        ></duet-input>
        <duet-input
          disabled={this.formIsDisabled}
          type="text"
          value={this.activeProduct.product_price}
          required
          label="Product price"
          placeholder="Type in product price"
          onDuetChange={e => {
            this.activeProduct.product_price = Number(e.target.value);
          }}
        ></duet-input>
        <duet-input
          disabled={this.formIsDisabled}
          type="text"
          value={this.activeProduct.product_stock_count}
          required
          label="Product stock"
          placeholder="Type in product stock"
          onDuetChange={e => {
            this.activeProduct.product_stock_count = Number(e.target.value);
          }}
        ></duet-input>
        <br />
        <duet-icon
          disabled={this.formIsDisabled}
          size="small"
          background="category-family"
          name="action-add"
          onClick={() => {
            this.onSave(this.activeProduct);
          }}
        ></duet-icon>
      </div>
    );
  }
}
