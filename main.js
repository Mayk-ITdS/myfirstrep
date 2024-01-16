

function addProduct()
{

    let productsTable=[]

    
    let prod_name=document.getElementById('productName').value
    let prod_price=document.getElementById('productPrice').value

    let prod_descript=document.getElementById('productDescription').value

    if (!productName || !productPrice)
    {
        alert('You have to fill Product Name and Product Price fields')

        let new_product=
        {
            id: productsTable.length +1,
            Name: prod_name,
            Price: prod_price,
            Description: prod_decript,
        };

        productsTable.push(new_product);

        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';

        

    }
    function update_Table()
    {
        let tbody=document.getElementById('productTable').getElementsByTagName('tbody')[0];
        
    productsTable.forEach(function(product)
    {
        let new_row=document.createElement('tr');

        new_row.innerHTML='<td>' + product.ID + '</td>' +
                            '<td>' + product.NAME + '</td>' +
                            '<td>'  + product.PRICE + '</td>' +
                            '<td>' + product.DESCRIPTION +'</td>';
        tbody.appendChild(new_row);
    })


    }    
}