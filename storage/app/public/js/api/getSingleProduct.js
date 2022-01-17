(function($) {
    $('.product-wrapper').on('click','#show',function(){
        $('.details-container').empty();     
    var title = $(this).data('title');
    var id = $(this).data('id');
    var desc = $(this).data('desc');
    var qty = $(this).data('qty');
    var price = $(this).data('price');
    var image_link = $(this).data('image_link');
    console.log(id);
    $('.modal.singleProduct').addClass('show');
    let div = $("<div/>",{"class": "data-wrapper d-flex  justify-content-between mt-3 p-3"});
    div.append([`
    <div class="image-container ">
        <img src="${image_link}" alt="" style="width:100%;height:195px;">
    </div> 
    <div class="details-wrapper">
            <h2>Title: ${title}</h2>
            <p>Description:</p>
            <p>${desc}</p>
            <p>Price: ${price}</p>
            <p>Quantity: ${qty}</p>
           
    </div>
    `])
    $('.details-container').append(div);
    })

})(jQuery); 