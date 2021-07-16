let currentClientIndex = -1;

spa.$('shoesListing', {
  require: 'dataStore',


});

spa.$extend('shoesListing', {

  getShoes: function() {
	console.log('dddd local2');
	return app.dataStore.clients;

   }, 

   handleShoeCardClick : function (id) {
	
	
	
   }
  

});


