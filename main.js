$(document).ready(() => {
  
  $('.postText').on('keyup', (event) => {
    let post = $(event.currentTarget).val();
    let remaining = 150 - post.length;
    $('.postText').focus();
    $('.characters').html(remaining);
  })

}); 