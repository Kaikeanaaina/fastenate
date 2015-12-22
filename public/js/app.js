var divv = document.getElementsByClassName('block-content')[0];

window.onload = function(){
  // do stuff
  var header = document.createElement('img');
  header.setAttribute('src','./assets/logo.svg');
  document.getElementsByClassName('block-title')[0].appendChild(header);



  $.getJSON('./api/get_the_app.json',function(data){     //first argument -path to our data. //second argument - call back function()

    console.log(data);

    for(var i=0; i<data.data.children.length; i++){
    var div = document.createElement('div');
    div.className = 'divContent';
    document.getElementsByClassName('block-content')[0].appendChild(div);
    var image = data.data.children[i].data.url;
    var title = data.data.children[i].data.title;
    var author = data.data.children[i].data.author;


    $(div).append('<img src = " '+image+'"></img>');
    $(div).append('<h3>'+title+'</div>');
    $(div).append('<h5> by '+author+'</h5>');

    }

  });
};

