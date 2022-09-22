"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@graphql-tools/schema");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const products_1 = require("./products");
const app = (0, express_1.default)();
const port = 4000;
// in memmory data
const data = {
    products: products_1.products
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
}


`;
const resolvers = {
    Query: {
        products: (obj, args, context, info) => context.products
    }
};
const executableSchema = (0, schema_1.makeExecutableSchema)({
    typeDefs,
    resolvers
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: executableSchema,
    context: data,
    graphiql: true
}));
app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});
