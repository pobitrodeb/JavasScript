var products = [
    { productName : 'chair',                    price: '2300' },
    { productName : 'table',                    price: '3300' },
    { productName : 'furniture',                price: '5300' },
    { productName : 'Locker',                   price: '2900' },
    { productName : 'Dressup table',            price: '2500' },
    { productName : 'Reading table',            price: '2800' }
];

function searchProducts(products, searchKey)
{
    for (var product of products)
    console.log(product.price);
}

searchProducts(products);
