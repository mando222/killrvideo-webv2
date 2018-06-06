const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");

//Hardcoded data
const customers = [
    {id:'1',name:'John Doe', email:'jdoe@gmail.com', age:35},
    {id:'2',name:'Steve Smith', email:'ssmith@gmail.com', age:25},
    {id:'3',name:'Sara Williams', email:'swilliams@gmail.com', age:32}
]

//Customer Type
const customerType = new GraphQLObjectType({
    name:'customer',
    fields:() => ({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        age:{type:GraphQLInt},
    })
});

//Root query
const rootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        customer:{
            type:customerType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args){
                return axios.get('')
                    .then(res => res.data);
            }
        },
        customers:{
            type:new GraphQLList(customerType),
            resolve(parentValue, args){
                return customers;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query:rootQuery
});