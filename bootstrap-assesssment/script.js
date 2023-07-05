// $document.ready(function(){
  
  $(document).click(function(e){
    //e.target.classList.contains('gallery-item')  //js method
    if($(e.target).hasClass('gallery-item')){     // convert in jquery           
      const src = $(e.target).attr('src');
      const alt = $(e.target).attr('alt');
      console.log(alt)
    
      // $('.modal-img').src = srcz;     //this syntax did not worked
      $('.modal-img').attr('src', src); // this syntax worked
      $('.modal-img').attr('alt', alt); 
  
      var myModal = new bootstrap.Modal($('#gallery-modal'));
      myModal.show();
    }
  })

// })
