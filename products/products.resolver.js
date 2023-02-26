const productModel = require('./products.model');

module.exports = {
    Query:
    {
        products: () =>{
            console.log("Getting The Products");
            return productModel.getAllProducts();
        },
        productByPrice: (_,args) => {
           return productModel.getProductByPrice( args.min , args.max);
        },
        productById: (_,args) => {
            return productModel.getProductById(args.id)
        }
    },
    Mutation: {
        addNewProduct: (_,args) =>
        {
            return productModel.addNewProduct(args.id, args.description, args.price);
        },
        addProductReviewById: (_,args) =>
        {
            return productModel.addProductReviewById(args.id, args.rating, args.comment)
        }
    }
    
};