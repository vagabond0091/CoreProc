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
    
  })(jQuery); 