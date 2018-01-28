// FORM JS

$('#unsub-form').on('submit',function(){

  // action URL from the Google Form you created + "?" at the end
  var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSdGcADIpJnIyrGUCJXpMP5ogGnqaJa85BobYt2HPus8LMW2Cg/formResponse?";
  var submitRef = "&submit=Submit";

  var email = encodeURIComponent($('#email').val());
  var emailID = "entry.1801517356";

  // concatenate the url we will submit the form to Google Spreadsheet
  var submitURL = (baseURL + emailID + "=" + email + submitRef);

  console.log(submitURL);

  $(this)[0].action=submitURL;
  document.getElementById("confirmation").style.display = "inline-block";
  document.getElementById('unsub-header').style.display = "none";
  document.getElementById('unsubp').style.display = "none";
  document.getElementById('unsub-form').style.display = "none";
});

// FORM JS END
