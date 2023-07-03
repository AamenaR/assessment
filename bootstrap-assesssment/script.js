// $document.ready(function(){
  
  $(document).click(function(e){
    if(e.target.classList.contains('gallery-item')){
      const src = $(e.target).attr('src');
    
      // $('.modal-img').src = srcz;  //this syntax did not worked
      $('.modal-img').attr('src', src); // this syntax worked
  
      var myModal = new bootstrap.Modal($('#gallery-modal'));
      myModal.show();
    }
  })

// })
