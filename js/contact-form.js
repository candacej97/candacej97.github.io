// FORM JS

$('#contact-form').on('submit',function(){

  // action URL from the Google Form you created + "?" at the end
  var baseURL = "https://docs.google.com/forms/u/1/d/e/1FAIpQLScwQTIexczpV0TCxcJRg7dM_zWZ3e7IKISFKS8wtxiOJALHOA/formResponse?";
  var submitRef = "&submit=Submit";

  var first = encodeURIComponent($('#first_name').val());
  var firstID = "entry.233034176";

  var last = encodeURIComponent($('#last_name').val());
  var lastID = "entry.103194916";

  var subject = encodeURIComponent($('#subject').val());
  var subjectID = "entry.365944479";

  var email = encodeURIComponent($('#email').val());
  var emailID = "entry.588838452";

  var message = encodeURIComponent($('#textarea1').val());
  var messageID = "entry.1438608251";

  // concatenate the url we will submit the form to Google Spreadsheet
  var submitURL = (baseURL + firstID + "=" + first + "&" + lastID + "=" + last + "&" + subjectID + "=" + subject + "&" + emailID + "=" + email + "&" + messageID + "=" + message + submitRef);

  console.log(submitURL);

  $(this)[0].action=submitURL;
  document.getElementById("confirmation").style.display = "inline-block";
  // document.getElementById('unsub-header').style.display = "none";
  // document.getElementById('unsubp').style.display = "none";
  document.getElementById('contact-form').style.display = "none";
});