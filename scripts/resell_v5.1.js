$(function(){
	var resseller = {
		country: [
			'united-states',
			'new-zealand',
			'england',
			'australia',
			'denmark',
			'france',
			'italy',
			'japan',
			'spain',
			'germany',
			'switzerland',
			'netherlands',
			'ukraine'
		],
		image_urls: [
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568162/united-states_eut0qq.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568163/new-zealand_nvaicr.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568159/england_msvipu.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568159/australia_mx0nca.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568163/denmark_b4deix.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568165/france_ixwcl5.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568164/italy_a9xdzj.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568163/japan_hfygog.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568165/spain_txyfsc.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568165/germany_ihnlci.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568157/switzerland_ysbbyn.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568163/netherlands_c9wfz7.svg',
			'https://res.cloudinary.com/dc4ci2dzs/image/upload/v1751568160/ukraine_yz1itr.svg'
		],
		links: [
			'https://www.georgianwinehouse.com/',
			'http://www.planetwine.co.nz/wines/georgia/?fbclid=IwAR2lbz9vVPByelrn2_LVkFGBCtBmtRJxjkNP9FApNPcLsxdEe9a2YbZqjy4',
			'https://www.lescaves.co.uk',
			'http://www.vinous.com.au/',
			'http://rosforth.dk/',
			'http://www.puzelat.com/ home-page/',
			'https://www.triplea.it/it/?fbclid=IwAR3C-JM1TfYFhrzZ7uEJ1jMZ2xFX-rZ8ReHkebaR2lVuIgAFh8gook2PQ10',
			'http://racines.co.jp/',
			'http://krakoslowwines.pl/',
			'http://cuvee3000.com/',
			'https://m.facebook.com/VIN-BIEN-631757393516689/',
			'https://ninovino.ch/?fbclid=IwAR082JkW1t9vCLdPvFHHeElZxo-VSn8iiQgA7sdjyIxR-_39YTWp20TA4b0',
			'https://zuiverwijnen.nl/iagos-wine-chinuri-2022/',
			'https://sabotage.wine/product/18804'
		]
	}
	function flagImg(flags, flags_container){
		for(var i = 0; i<flags.length; i += 1){
			flags.eq(i).attr('src', resseller.image_urls[i]);
			flags_container.eq(i).attr('href',resseller.links[i]);
			
			flags[i].style.objectFit = 'contain';
			flags[i].style.width = '100px';
		}
	}

	flagImg($('.flag'), $('.flag-link'));

});
