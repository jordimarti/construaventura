
$(document).on('turbolinks:load', function () {
	// Preparació
	$('.container-fase').hide()
	$('#amaga-tot').click(function() {
		$('.container-fase').hide()
	})
	// Fase 1
	$('#frase-2').hide()
	$('.benfet').hide()
	$('.malfet').hide()
	$('#pista-1').click(function() {
	  $('#frase-1').hide()
	  $('#frase-2').show()
	  $('#pista-1').hide()
	})
	$('#comprova-repte-1').click(function() {
	  valor = $('#input-repte-1').val()
	  if(valor === 'Per estalviar diners i lluitar contra el canvi climàtic') {
	    $('.benfet').show()
	  } else if (valor === 'Per estalviar diners i lluitar contra el canvi climatic') {
	    $('.benfet').show()
	  } else if (valor === 'Per estalviar diners i lluitar contra el canvi climàtic.') {
	    $('.benfet').show()
	  } else if (valor === 'Per estalviar diners i lluitar contra el canvi climatic.') {
	    $('.benfet').show()
	  } else {
	    $('.malfet').show().delay(3000).fadeOut();
	  }
	})

	// Fase 2
	$('.benfet2').hide()
	$('.malfet2').hide()
	$('.map-slice').click(function() {
		$('.benfet2').hide()
		$('.malfet2').show().delay(3000).fadeOut();
	})
	$('#map48').click(function() {
		$('.malfet2').hide()
		$('.benfet2').show()
	})
	$('#map48_v2').hide();
  $('#map48').hover(function() {
		$('#map48').hide();
		$('#map48_v2').show();
	})
	$('#map48_v2').click(function() {
		$('.malfet2').hide()
		$('.benfet2').show()
	})
  
  // Fase 3
  

  // Fase 4
  $('.benfet4').hide()
  $('.malfet4').hide()
  $('#porquets-casa-palla').click(function() {
		$('.benfet4').hide()
  	$('.malfet4').show().delay(3000).fadeOut();
  })
  $('#porquets-casa-fusta').click(function() {
		$('.benfet4').hide()
  	$('.malfet4').show().delay(3000).fadeOut();
  })
  $('#porquets-casa-maons').click(function() {
		$('.benfet4').show()
  	$('.malfet4').hide()
  })

  // Fase 5
  $('.benfet5').hide()
  $('.malfet5').hide()
  $('#tria-manta').click(function() {
		$('.benfet5').show()
  	$('.malfet5').hide()
  })
  $('#tria-estufa').click(function() {
		$('.benfet5').hide()
  	$('.malfet5').show().delay(3000).fadeOut();
  })

  // Fase 8
  $('.benfet8').hide()
  $('.malfet8').hide()
  $('#comprova-repte-8').click(function() {
	  valor8 = $('#input-repte-8').val()
	  if(valor8 === 'LES BOMBETES LED CONSUMEIXEN MENYS ENERGIA') {
	    $('.benfet8').show()
	  } else if (valor8 === 'Les bombetes led consumeixen menys energia') {
	    $('.benfet8').show()
	  } else if (valor8 === 'Les bombetes LED consumeixen menys energia') {
	    $('.benfet8').show()
	  } else {
	    $('.malfet8').show().delay(3000).fadeOut();
	  }
	})

	// Fase 10
	$('.benfet10').hide()
	$('.malfet10').hide()
	
	$('#container-tria-aventura-2').hide()
	$('#container-tria-aventura-3').hide()
	$('#container-tria-aventura-4').hide()
	$('#container-tria-aventura-5').hide()

	$('#llum-artificial').click(function() {
		$('#container-tria-aventura-1').delay(3000).fadeOut()
		$('#container-tria-aventura-2').delay(4000).fadeIn()
		$('.malfet10').show().delay(3000).fadeOut()
	})
	$('#llum-natural').click(function() {
		$('#container-tria-aventura-1').delay(3000).fadeOut()
		$('#container-tria-aventura-2').delay(4000).fadeIn()
		$('.benfet10').show().delay(3000).fadeOut()
	})
	$('#nevera-be').click(function() {
		$('#container-tria-aventura-2').delay(3000).fadeOut()
		$('#container-tria-aventura-3').delay(4000).fadeIn()
		$('.benfet10').show().delay(3000).fadeOut()
	})
	$('#nevera-malament').click(function() {
		$('#container-tria-aventura-2').delay(3000).fadeOut()
		$('#container-tria-aventura-3').delay(4000).fadeIn()
		$('.malfet10').show().delay(3000).fadeOut()
	})
	$('#classe-fred').click(function() {
		$('#container-tria-aventura-3').delay(3000).fadeOut()
		$('#container-tria-aventura-4').delay(4000).fadeIn()
		$('.malfet10').show().delay(3000).fadeOut()
	})
	$('#classe-be').click(function() {
		$('#container-tria-aventura-3').delay(3000).fadeOut()
		$('#container-tria-aventura-4').delay(4000).fadeIn()
		$('.benfet10').show().delay(3000).fadeOut()
	})
	$('#transport-cotxe').click(function() {
		$('#container-tria-aventura-4').delay(3000).fadeOut()
		$('#container-tria-aventura-5').delay(4000).fadeIn()
		$('.malfet10').show().delay(3000).fadeOut()
	})
	$('#transport-bici').click(function() {
		$('#container-tria-aventura-4').delay(3000).fadeOut()
		$('#container-tria-aventura-5').delay(4000).fadeIn()
		$('.benfet10').show().delay(3000).fadeOut()
	})
	$('#roba-estesa').click(function() {
		$('#container-tria-aventura-5').delay(3000).fadeOut()
		$('.benfet10').show().delay(3000).fadeOut()
	})
	$('#roba-assecadora').click(function() {
		$('#container-tria-aventura-5').delay(3000).fadeOut()
		$('.malfet10').show().delay(3000).fadeOut()
	})
})