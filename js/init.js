(function($){
  $(function(){

    $('.button-collapse').sideNav();

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var age = year - 1997;

    if (month <= 3) {
      age = age - 1;
    }

    $('#age').innerHTML = age;

  }); // end of document ready
})(jQuery); // end of jQuery name space
