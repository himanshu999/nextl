spa.$extend('first', {

  changePage: function( ) {
    //return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];

	console.log(app);
	app.dataStore.member.currentPage = 2;
	spa.$hide( 'first' );
	spa.$render('clientListing');
	spa.$show('clientListing');
  }

});


