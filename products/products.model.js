const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
        reviews: []
    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 55.12,
        reviews: []
    },
]

function getAllProducts() {
    return products;
}

function getProductByPrice(min,max)
{
    return products.filter((product) =>
    {
        return product.price >= min && product.price <= max;
    })
}

function getProductById(id)
{
    return products.find((product) =>
    {
        return product.id === id;
    })
}

function addNewProduct(id,description,price)
{
    const newProduct = {
       id,
       price,
       description,
       reviews: []

    };

    products.push(newProduct);
    return newProduct;
}

function addProductReviewById(id,rating,comment)
{
    const matchedProduct = getProductById(id);

    var newReview = null;

    if(matchedProduct)
    {
         newReview = {
            rating,
            comment
        }
    }
    matchedProduct.reviews.push(newReview);

    return newReview;
}

module.exports = {
    getAllProducts,
    getProductByPrice,
    getProductById,
    addNewProduct,
    addProductReviewById
}