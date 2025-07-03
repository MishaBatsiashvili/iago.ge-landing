$(function(){
  $('.wine-img').click(function(){
    var wineImgSrc = $(this).attr('src');
    var wineIndex = $('.wine-img').index(this);
    
    $('.wine-description-img').attr('src', wineImgSrc);
    
    // Hide all wine titles first
    $('.wine-ddw-title').attr('style', 'border-bottom: 2px solid white; display: none');
    
    // Add console logs to check if elements exist
    console.log('Amber titles:', $('.wine-ddw-title-amber').length);
    console.log('White titles:', $('.wine-ddw-title-white').length);
    
    setTimeout(() => {
        console.log('wineIndex', wineIndex);
        if(wineIndex === 0) {
            // Hide all again to be safe
            $('.wine-ddw-title').attr('style', 'border-bottom: 2px solid white; display: none');
            // Show only amber
            $('.wine-ddw-title-amber').attr('style', 'border-bottom: 2px solid white; display: block !important');
        } else if(wineIndex === 1) {
            // Hide all again to be safe
            $('.wine-ddw-title').attr('style', 'border-bottom: 2px solid white; display: none');
            // Show only white
            $('.wine-ddw-title-white').attr('style', 'border-bottom: 2px solid white; display: block !important');
        }
    }, 300);
  });
});