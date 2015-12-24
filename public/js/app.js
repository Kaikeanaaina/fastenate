window.onload = function(){
  // do stuff
  var header = document.createElement('img');
  header.setAttribute('src','./assets/logo.svg');
  document.getElementsByClassName('block-title')[0].appendChild(header);



  $.getJSON('./api/get_the_app.json',function(data){     //first argument -path to our data. //second argument - call back function()



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









  var randomButton = document.getElementById('randomButton');
  randomButton.addEventListener('click',function(){

  //clear the blockContent
  var contentLength = document.getElementsByClassName('divContent').length;

    for(var i = 0 ; i < contentLength ; i++){
      document.getElementsByClassName('block-content')[0].removeChild(document.getElementById('id'+i));
    }

//document.getElementsByClassName('block-content')[0].removeChild(document.getElementById('id0'))
    //reenter the blockContent with divs at a random count
    //math random
    var arrayOfRandoms = [];
    for(var j = 0; j< contentLength ; j++){
      var randomNum = Math.floor(Math.random()*contentLength);
      if(arrayOfRandoms.indexOf(randomNum)=== -1){
        arrayOfRandoms.push(randomNum);
      }
      console.log(arrayOfRandoms);

      var indexNum = arrayOfRandoms[j];
















    } //for loop


});










};

