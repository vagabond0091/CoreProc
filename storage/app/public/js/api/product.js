(function($) {
    $('#uploadProduct').on('click',function(){
        console.log('click');
        var file_check = $('#image');
        var image = $('#image').prop('files')[0];
        var title = $('#title').val();
        var description = $('#description').val();
        var price = $('#price').val();
        var qty = $('#qty').val();
        var user_id = $('#user_id').val();
        var reader = new FileReader();
        var baseString;
        reader.onloadend = function () { 
            baseString = reader.result;
            $.ajax({
                type: "POST",
                url: "/api/uploadImage",
                data:{
                    product_image:baseString,
                },
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                dataType: "json",
                success: function(response) {
                    console.log(response)
                    if(response.success == true){
                        $.ajax({
                            type: "POST",
                            url: "/api/createProduct",
                            data:{
                                title:title,
                                description:description,
                                price:price,
                                quantity:qty,
                                product_image:response.data_url.secure_url,
                                user_id:user_id
                            },
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            dataType: "json",
                            success: function(response) {
                                console.log(response);
                                if(response.success == true){
                                    toastr.success(response.message);
                                    setInterval(function() {
                                      window.location.replace("/Product");
                                    }, 2000);
                                }
                                else{
                                    toastr.error('Unable to create a new Product !');
                                    setInterval(function() {
                                      window.location.replace("/Product");
                                    }, 2000);
                                }
                            },
                            error: function(error) {
                                console.log(error);
                            }
                        })
                    }
                    else{
                        toastr.error('Unable to create a new Product !');
                        setInterval(function() {
                          window.location.replace("/Product");
                        }, 2000);
                    }
                },
                error: function(error) {
                    console.log(error);
                }
            })
          };
          if( file_check.prop('files').length == 0 ){
            toastr.error('Please upload image');
          }
          else{
        
              reader.readAsDataURL(image);
          }   
    })
    var user_id = $('#user_id').val();
    if(user_id != null){
        $.ajax({
            type: "GET",
            url: `/api/getAllProducts/${user_id}`,
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
    
         
            dataType: "json",
            success: function(response) {
                console.log(response.data);
                console.log(response.data[0].product);
                if(response.success == true){   
                    response.data[0].product.map((items)=>{
                        console.log(items);
                        let div = $("<div/>",{"class": "card mr-3", "style":"width:18rem;"});
                        div.append([`
                            <img class="card-img-top" src="${items.image_link}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Title: ${items.title}</h5>
                                <p class="card-text">Description: ${items.description}</p>
                                <p class="card-text">Price: ₱${items.price}</p>
                                <p class="card-text">Quantity: ${items.quantity}</p>
                                <div class="cta-wrapper">
                                <button class="btn btn-primary">Edit</button>
                                <button class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        `])
                        $('.product-container').append(div);
                    });
                }
            },
            error: function(error) {
                console.log(error);
            }
        
          })
    }
  })(jQuery); 