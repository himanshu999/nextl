let currentClientIndex = -1;

spa.$('shoesListing', {
  require: 'dataStore',


});

spa.$extend('shoesListing', {

   handleShoeCardClick : function (id) {
	
	spa.$hide('shoesListing');
	//spa.$render('customizerView');

	
	spa.$render('customizerView', {

	  target: '#spaCompContainer_header_1',

	  getImage: function(obj) {
	
	if(obj.materialJSON !== ""){
		const mat = JSON.parse(obj.materialJSON);	
		return mat.images[0].url;
	}
	return "";
  },

	}); 

	
	setTimeout(() => {
		window.frames[0].loadMaterials();
	}, 10000);
	//spa.$show('customizerView');
	
   }
  

});


