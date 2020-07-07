// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")
require("jquery-ui")
require("bootstrap")
require("@fortawesome/fontawesome-free")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$( function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();

  $( "#material-1" ).draggable();
  $( "#material-2" ).draggable();
  $( "#material-3" ).draggable();
  $( "#material-4" ).draggable();
  $( "#material-5" ).draggable();
  $( "#material-6" ).draggable();
  $( "#material-7" ).draggable();
  $( "#material-8" ).draggable();
  $( "#material-9" ).draggable();
  $( "#material-10" ).draggable();
  $( "#material-11" ).draggable();

  $( "#casa-material-1" ).droppable({
    drop: function(event, ui) {
      $(this).addClass( "material-casa-correcte" );
    },
    accept: "#material-10"
  });

  $( "#casa-material-2" ).droppable({
    drop: function(event, ui) {
      $(this).addClass( "material-casa-correcte" );
    },
    accept: "#material-6"
  });

  $( "#casa-material-3" ).droppable({
    drop: function(event, ui) {
      $(this).addClass( "material-casa-correcte" );
    },
    accept: "#material-8"
  });

  $( "#casa-material-4" ).droppable({
    drop: function(event, ui) {
      $(this).addClass( "material-casa-correcte" );
    },
    accept: "#material-7"
  });

  $( "#casa-material-5" ).droppable({
    drop: function(event, ui) {
      $(this).addClass( "material-casa-correcte" );
    },
    accept: "#material-9"
  });
});