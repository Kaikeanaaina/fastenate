window.onload = function(){
  // do stuff
  var header = document.createElement('img');
  header.setAttribute('src','./assets/logo.svg');
  document.getElementsByClassName('block-title')[0].appendChild(header);



  $.getJSON('./api/get_the_app.json',function(data){     //first argument -path to our data. //second argument - call back function()

    console.log(data.data.children.length);

    for(var i=0; i<data.data.children.length; i++){
    var div = document.createElement('div');
    div.className = 'divContent';
    div.id = 'id'+i;

    document.getElementsByClassName('block-content')[0].appendChild(div);
    var image = data.data.children[i].data.url;
    var title = data.data.children[i].data.title;
    var author = data.data.children[i].data.author;



    $(div).append('<img src = " '+image+'"></img>');
    $(div).append('<h3>'+title+'</div>');
    $(div).append('<h5> by '+author+'</h5>');

    }

  });


  //this array is to save the random numbers
  var arrayOfRandoms = [];

  console.log(arrayOfRandoms.length);
var alohaloha = 50;

  //this won't work unless it's in the get.JSON
  var makingArrayofRandoms = function(){
  // this won't work unless it's in the get.JSON
    var contentLength = alohaloha;
    while(arrayOfRandoms.length===contentLength){
      var randomNum = Math.floor(Math.random()*contentLength);
      if(arrayOfRandoms.indexOf(randomNum)=== -1){
       arrayOfRandoms.push(randomNum);
      } //if
    } //while loop
  };



  var randomButton = document.getElementById('randomButton');
  randomButton.addEventListener('click',function(){

    //this resets the array where the random numbers are saved
    arrayOfRandoms=[];

    //this erase all divs in the divContent
    for(var i = 0 ; i < alohaloha ; i++){
      document.getElementsByClassName('block-content')[0].removeChild(document.getElementById('id'+i));
    }

    $.getJSON('./api/get_the_app.json',function(data){     //first argument -path to our data. //second argument - call back function()

      //this pushes the random numbers in the array
      makingArrayofRandoms();

      console.log(data.data.children.length);


      for(var i=0; i<data.data.children.length; i++){
      var div = document.createElement('div');
      div.className = 'divContent';
      div.id = 'id'+i;

      document.getElementsByClassName('block-content')[0].appendChild(div);
      var image = data.data.children[arrayOfRandoms[i]].data.url;
      var title = data.data.children[arrayOfRandoms[i]].data.title;
      var author = data.data.children[arrayOfRandoms[i]].data.author;



      $(div).append('<img src = " '+image+'"></img>');
      $(div).append('<h3>'+title+'</div>');
      $(div).append('<h5> by '+author+'</h5>');

      }

  });


});










};

