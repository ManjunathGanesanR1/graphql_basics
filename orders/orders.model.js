const orders = [
    {
        date: '2005-12-01',
        subtotal: 90.22,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'old Red Shoe',
                    price: 45.11
                },
                quantity: 2,
            }
        ]
    }
];

function getAllOrders()
{
    return orders;
}

module.exports = {
    getAllOrders
}