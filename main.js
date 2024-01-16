
    ID_=1;
function addProduct()
{
    
    let productsTable=[]

    
    let prod_name=document.getElementById('productName').value
    let prod_price=document.getElementById('productPrice').value

    let prod_descript=document.getElementById('Product_description').value

    if (!prod_name || !prod_price)
    {
        alert('You have to fill Product Name and Product Price fields');
    }

    else {
        
        ID_+=1;
        let new_product=
        {
            ID: ID_,
            NAME: prod_name,
            PRICE: prod_price,
            DESCRIPTION: prod_descript,
        };

        productsTable.push(new_product);

        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';

        
        update_Table()
    }
function update_Table()
    {
    let tbody=document.getElementById('productTable').getElementsByTagName('tbody')[0];
        
        productsTable.forEach(
        
        function (product) {
        let new_row = document.createElement('tr')

        new_row.innerHTML = '<td>' + product.ID + '</td>' +
            '<td>' + product.NAME + '</td>' +
            '<td>' + product.PRICE + '</td>' +
            '<td>' + product.DESCRIPTION + '</td>'
        tbody.appendChild(new_row);
    })


    }    
}