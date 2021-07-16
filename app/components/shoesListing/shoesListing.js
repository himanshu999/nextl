let currentClientIndex = -1;

spa.$('shoesListing', {
  require: 'dataStore',


});

spa.$extend('shoesListing', {

   handleShoeCardClick : function (id) {
	
	spa.$hide('shoesListing');
	spa.$show('customizerView');
	
   }
  

});


