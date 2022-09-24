import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { products } from "./products";
const app = express();

const port = 4000;
// in memmory data
interface IProduct {
  product_id: number;
  product_name: string;
  product_price: number;
  product_stock_count: number;
}
const data = {
  products,
};
const typeDefs = `
type Product{
  product_id:Int!
  product_name:String!
  product_price:Float!
  product_stock_count:Int!
}
type Query{
  products:[Product]
  getProduct(product_id:Int!):Product
}

type Mutation{
  createProduct(product_name:String!, product_price:Float!, product_stock_count:Int!): Product
  deleteProduct(product_id:Int!): Product
  updateProduct(product_id:Int!,product_name:String!, product_price:Float!, product_stock_count:Int!):Product
}

`;

const resolvers = {
  Query: {
    products: (obj: any, args: any, context: any, info: any) =>
      context.products,
    getProduct: (obj: any, args: any, context: any, info: any) =>
      context.products.find(
        (product: IProduct) => product.product_id === args.product_id
      ),
  },
  Mutation: {
    createProduct: (obj: any, args: any, context: any, info: any) => {
      const newProduct: IProduct = {
        product_id: context.products.length + 1,
        product_name: args.product_name,
        product_price: args.product_price,
        product_stock_count: args.product_stock_count,
      };
      data.products.push(newProduct);
      return newProduct;
    },
    deleteProduct: (obj: any, args: any, context: any, info: any) => {
      const matchProduct = context.products.find(
        (product: IProduct) => product.product_id === args.product_id
      );
      if (matchProduct) {
        data.products = (context.products as IProduct[]).filter(
          (product: IProduct) => product.product_id !== args.product_id
        );
      }
      return matchProduct;
    },
    updateProduct: (obj: any, args: any, context: any, info: any) => {
      const matchProductId = ( data.products as IProduct[]).findIndex(
        (product: IProduct) => product.product_id === args.product_id
      );
      if (matchProductId > -1) {
        ( data.products as IProduct[]).splice(matchProductId, 1, {
          ...context.products[matchProductId],
          product_name: args.product_name,
          product_price: args.product_price,
          product_stock_count: args.product_stock_count,
        });
      }

      return  data.products[matchProductId];
    },
  },
};

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at port: ${port}`);
});
