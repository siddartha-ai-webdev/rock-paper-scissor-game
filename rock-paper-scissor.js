 let isautoplaying=false;
    let intervalid;
    function autoplay(){
      if(!isautoplaying){
      intervalid=setInterval(function(){
        const computers=randommove(); 
        playgame(computers);
      },1000)
      isautoplaying=true;
    }
    else{
      clearInterval(intervalid);
      isautoplaying=false;
    }  
    }
    const score={
      win:0,
      lose:0,
      tie:0
    }
    document.querySelector('.third-line').innerHTML=` wins ${score.win} loses ${score.lose} ties ${score.tie}`;
   
    let computermove='';
  function randommove(){
    const computer=Math.random();
    if(computer>=0 && computer<1/3){
      computermove='rock';
    }
    else if (computer>=1/3 && computer<2/3){
      computermove='paper';
    }
    else{
      computermove='scissor';
    }
    return computermove;
  }
  function playgame(player){
    let result='';
    randommove();
    if(player==='rock'){
      if(computermove==='rock'){
        result='tie';
      }
      else if(computermove==='paper'){
        result='you lose';
      }
      else if(computermove==='scissor'){
        result='you win';
      }
    }
    else if(player==='paper'){
      if(computermove==='paper'){
        result='tie';
      }
      else if(computermove==='scissor'){
        result='you lose';
      }
      else if(computermove==='rock'){
        result='you win';
      }
    }
    else if(player==='scissor'){
      if(computermove==='scissor'){
        result='tie';
      }
      else if(computermove==='rock'){
        result='you lose';
      }
      else if(computermove==='paper'){
        result='you win';
      }
    }
    if (result==='you win'){
      score.win+=1;
    }
    else if(result==='you lose'){
      score.lose+=1;
    }
    else if (result==='tie'){
      score.tie+=1;
    }
   document.querySelector('.first-line').innerHTML=result;
   document.querySelector('.second-line').innerHTML=`you <img src="images/${player}-emoji.png" class="move-icon"><img src="images/${computermove}-emoji.png" class="move-icon"> computer`;
   document.querySelector('.third-line').innerHTML=` wins ${score.win} loses ${score.lose} ties ${score.tie}`;

  }
   function function1() {
  const buttonelement = document.querySelector('.auto-play');
   if(buttonelement.innerText==='auto play'){
    buttonelement.innerHTML='stop auto play';
    buttonelement.classList.add('is-subscribed');
   }
   else{
    buttonelement.innerHTML='auto play';
    buttonelement.classList.remove('is-subscribed');
   }
 }