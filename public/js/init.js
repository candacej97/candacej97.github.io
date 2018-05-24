(function($){
  $(function(){

    $('.button-collapse').sideNav();

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var age = year - 1997;

    if (month <= 2) {
      //months 0-11
      age = age - 1;
    }

    document.getElementById('age').innerHTML = age;
    //$('#age').html(age);
    console.log(age);

  }); // end of document ready
})(jQuery); // end of jQuery name space
