$("#dogButton").click(function(){
  $.get("https://dog.ceo/api/breeds/image/random").done(function(data){
    console.log(data.message);
    $("#dogPic").attr("src", data.message);
  });
});
