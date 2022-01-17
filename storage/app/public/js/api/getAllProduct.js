(function($) {
    $.ajax({
        type: "GET",
        url: `/api/getAllProducts`,
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},

     
        dataType: "json",
        success: function(response) {
            console.log(response);
            if(response.success == true){   
                $('.details-container').empty();
                response.data.map((products_item)=>{
                    
                    products_item.product.map((items)=>{
                      
                        let div = $("<div/>",{"class": "card mr-3", "style":"width:18rem;"});
                        div.append([`
                            <img class="card-img-top" src="${items.image_link}" alt="Card image cap" style="width:100%;height:200px;">
                            <div class="card-body">
                                <h5 class="card-title">Title: ${items.title}</h5>
                                <p class="card-text">Description: ${items.description}</p>
                                <p class="card-text">Price: ₱${items.price}</p> 
                                <p class="card-text">Quantity: ${items.quantity}</p>
                                <div class="cta-wrapper">
                                <button class="btn btn-success" data-id="${items.id}" data-title="${items.title}" data-desc="${items.description}" data-qty="${items.quantity}"  data-price="${items.price}" data-image_link="${items.image_link}" id="show" >View Product</button>
                                </div>
                            </div>
                        `])
                        $('.product-wrapper').append(div);
                       
                    });
                })
                
               
                  
                  
                    
               
               
            }
        },
        error: function(error) {
            console.log(error);
        }
    
      })
})(jQuery); 