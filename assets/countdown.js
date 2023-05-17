 let nIntervId;
  let input = document.querySelector('#input').innerText;
  const countdown = () => {
    const countDate = new Date(input).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);

    textDay = textDay <10 ? '0' +  textDay : textDay ;
    textHour = textHour <10 ? '0' +  textHour : textHour ;
    textMinute = textMinute <10 ? '0' +  textMinute : textMinute ;
    textSecond = textSecond <10 ? '0' +  textSecond : textSecond ; 
    
    if (gap < 1000) {
      textDay = '00';
      textHour = '00';
      textMinute = '00';
      textSecond = '00';
        
    }
     
    document.querySelector(".day").innerText = textDay + ' :';
    document.querySelector(".hour").innerText = textHour + ' :';
    document.querySelector(".minute").innerText = textMinute + ' :';
    document.querySelector(".second").innerText = textSecond;

   

    
    
  };

      nIntervId = setInterval(countdown, 1000);

 
