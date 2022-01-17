(function($) {
  $('#addProduct').on("click",function(e){
      e.preventDefault();
      $('.modal').toggleClass('show');
  })
  $('.close.btn-danger').on("click",function(e){
      e.preventDefault()
      $('.modal').removeClass('show');
  })
})(jQuery); 