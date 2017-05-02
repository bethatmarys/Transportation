$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    //this will add a listener to our form

    event.preventDefault();
    //this will stop the page from re-beginning after its initial run

    $("#work-responses").show();
    //when our form is submitted this will display our work responses <span>

    $("input:checkbox[name=work-transportation]:checked").each(function(){
    //the above refers to the array above and shows the selected boxes

      var workTransportationMode = $(this).val();
    //this narrows it down even further by saying that we only want the checked transportation boxes

      $('#work-responses').append(workTransportationMode + "<br>");
    //this says that we want all the checked boxes to appear togeather

    });
    $("#fun-responses").show();
    //this shows the second set of question to be asked

      $("input:checkbox[name=fun-transportation]:checked").each(function(){
    //the above refers to the array above and shows the selected boxes

      var funTransportationMode = $(this).val();
    //this narrows it down even further by saying that we only want the checked funtransportation boxes

      $('#fun-responses').append(funTransportationMode + "<br>");
    //this shows the second set of question to be asked
        });


    $('#transportation_survey').hide();
    //this hides the survey from the users
  });
});
