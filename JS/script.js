(function(){

  let out = document.querySelectorAll('.out');
  let limit = 0;
  window.addEventListener('scroll', function(){  
    if( limit == out.length ){ return; }
    
    for(let i = 0; i < out.length; i++){
      let pos = out[i].getBoundingClientRect().top;
      let win = window.innerHeight - 40;
      if( pos < win && out[i].dataset.stop === "0" ){
        out[i].dataset.stop = 1;
        let x = 0;
        limit++;
        let int = setInterval(function(){
          x = x + Math.ceil( out[i].dataset.to / 50 ); 
          out[i].innerText = x;
          if( x > out[i].dataset.to ){
            out[i].innerText = out[i].dataset.to;
            clearInterval(int);
          }
        }, 60);
      }
    }
  });
  
  })();

  





