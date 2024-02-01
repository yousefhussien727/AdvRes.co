// CONTACT MAP

var PageContact = function () {

	var _init = function () {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 24.388494994414412,
			lng: 39.493323693378294,
			scrollwheel: false,
			zoom: 15,
		});


		mapbg.addMarker({
			lat: 24.388494994414412,
			lng: 39.493323693378294,
			title: 'شركة المصادر المتقدمة',
			infoWindow: {
				content: '<h3>شركة المصادر المتقدمة</h3><p>المنطقة الصناعية، المدينة المنورة، ص.ب. 3038</p>'
			}
		});
	}

	return {
		//main function to initiate the module
		init: function () {

			_init();

		}

	};
}();

$(document).ready(function () {
	PageContact.init();
	$(window).resize(function () {
		PageContact.init();
	});
});