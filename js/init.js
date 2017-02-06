(function($){
  $(function(){

    $('.button-collapse').sideNav();

      $(document).ready(function() {
          $('select').material_select();
      });

      $(document).ready(function(){
          $('.parallax').parallax();
      });

      $('input.autocomplete').autocomplete({
          data: {
              "Chaudronier": null,
              "Bureau d'étude ": null,
              "Responsable qualité": null,
              "Spéciliste cyber-défense": null,
              "Gardiennage": null,
              "Mecanien Nucléaire": null,
              "Logisticien": null
          },
          limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
      });

  }); // end of document ready
})(jQuery); // end of jQuery name space
