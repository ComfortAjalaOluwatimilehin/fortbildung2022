import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { products } from "./products";
const app = express();

const port = 4000;
// in memmory data

const data = {
  products
}
const typeDefs = `
type Product{
  product_id:Int!
  product_name:String!
  product_price:Float!
  product_stock_count:Int!
}
type Query{
  products:[Product]
}


`

const resolvers = {
  Query:{
    products:(obj:any, args:any,context:any,info:any) => context.products
  }
}

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/graphql", graphqlHTTP({
  schema:executableSchema,
  context:data,
  graphiql:true
}));


app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`)
})