const url = 'http://localhost:3000/products';

document.getElementById("product-form").addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = document.getElementById("productId").value;

    const name = document.getElementById("productName").value;

    const price = document.getElementById("productPrice").value;

    //alert(JSON.strinfify({id, name, price}, null, 2))

    const product = { id, name, price};

    if(id) {
        await updateProduct(product)
    } else {
        await createProduct(product)
    }


})