import { Component, h, Prop, State } from "@stencil/core";
import { IProduct } from "./products";

@Component({tag:"product-component", styleUrl:"./product.css"})
export class ProductComponent{

    @Prop() match!:any;
    
    @Prop() id:string = this.match.params.id

    @State() product!:IProduct;

    async fetchProductById() : Promise<void>{
     
        const queryString = `
        
            {}
        
        `
    }

    componentWillLoad(){
        this.fetchProductById()
    }

    render(){


        return (
            <div id="product">
                    {this.product ? <content>
                        <duet-heading level="h4">{this.product.product_name}</duet-heading>
                    </content>: null}
                
            </div>
        )
    }
}