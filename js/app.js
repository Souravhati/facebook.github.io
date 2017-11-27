$(document).ready(function(){
   //Hide the #Abut section

    
    
                    $("#facebookBtn").click(function(){
                        $("#team,#Update").show();
                    });


                //DATA FATCHING FROM FACEBOOK API

                var myFacebookToken = 'EAACEdEose0cBAHQTL1N3iBtVtn25pasWFhrf1GxhaAZAFHWBR3ZBNMb57OyQjAAyQp5OgUQRmynVXdB1KWY5a7EAY3Vv00Hh8YIylrY3MObNJ5XwSrKZAnZCBlmOCiaZAvFIVYGavNOTqNmmy1sI7NA1H66EmxQnqGrkONoMLEEMfYlc2NGGFUZCc7K7F6TSEuqwbXH8BZCCwZDZD';

                    function getFacebookInfo(){

                       $.ajax('https://graph.facebook.com/me?fields=id,name,education,feed,email,hometown,gender&access_token='+myFacebookToken,{

                                success : function(response){
                                    console.log(response);
                                    console.log(typeof(response));
                                    $("#myEmail").text(response.email);//NOT VISIABLE
                                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                                    $("#myHomeTown").text(response.hometown.name);
                                     $("#gender").text(response.gender);
                                      $("#gender").text(response.gender);
                                       $("#myName").text(response.name);
                                       $("#mycollege").text(response.education.data);
                                      

                                        






                                }
                            }//end argument list 



                    );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)


//FAcebook update


jQuery.each( obj, function( i, val ) {
  $( "#" + i ).append( document.createTextNode( " - " + val ) );
});




//Send Mail to the User

$('.loader').hide();

    function sendFormData(event){

    		var mail='sou93rock@gmail.com';
        // prevent the default behaviour of the form
        event.preventDefault();
        console.log($('form').serialize());
        $.ajax('https://api.edwisor.com/api/v1/public/send/mail/'+ mail,{

                type:'POST',
                data: $('form').serialize(),
                dataType: "json",
                success : function(response){
                    console.log(response);
                    alert("Data success");
                    $('form').remove();
                    document.write('<h2>'+response.userMessage+'</h2>')
                },
                error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    document.write('<h2>'+response.userMessage+'</h2>')
                },
                timeout:3000,
                beforeSend : function(){
                    $('.loader').show();
                },
                complete : function(){
                   $('.loader').hide();

                }

            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("form").on('submit',sendFormData)



});