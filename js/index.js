let openNav = document.getElementById('openNav');

$('.closebtn').click(function(){
    $('.navbarr').animate({width:'0'},400 , function(){
        $('.navbarr').hide(0)     
    })
    openNav.innerHTML='☰ open'
    $('#openNav').css('marginLeft' , '0px') 
})


$('#openNav').click(function(){
    if( $('.navbarr').css('width') === '0px'){
        $('.navbarr').show(0)
        $('.navbarr').animate({width:'300'},400)
        $('#openNav').css('marginLeft' , '300px') 
        openNav.innerHTML='☰ close'
    }
    else{
        $('.navbarr').animate({width:'0'},400)
        $('.navbarr').hide(0)
        $('#openNav').css('marginLeft' , '0px') 
        openNav.innerHTML='☰ open'
    }
})



// _______________________________________<<one>>_______
$('.oneH3').click(function () { 

    if($('.one').css('display')==='none'){
        $('.one').slideDown(400)
        $('.two').slideUp(400)
        $('.three').slideUp(400)
        $('.four').slideUp(400)
    }
    else{
        $('.one').slideUp(400)
    }
});

// ________________________________________<<two>>_______
$('.twoH3').click(function () { 

    if($('.two').css('display')==='none'){
        $('.two').slideDown(400)
        $('.one').slideUp(400)
        $('.three').slideUp(400)
        $('.four').slideUp(400)
    }
    else{
        $('.two').slideUp(400)
    }
});

// _______________________________________<<three>>_______
$('.threeH3').click(function () { 

    if($('.three').css('display')==='none'){
        $('.three').slideDown(400)
        $('.one').slideUp(400)
        $('.two').slideUp(400)
        $('.four').slideUp(400)
    }
    else{
        $('.three').slideUp(400)
    }
});

// ________________________________________<<four>>_______
$('.fourH3').click(function () { 

    if($('.four').css('display')==='none'){
        $('.four').slideDown(400)
        $('.one').slideUp(400)
        $('.two').slideUp(400)
        $('.three').slideUp(400)
    }
    else{
        $('.four').slideUp(400)
    }
});


// ___________________start counter days____________________________
let countDownDate = new Date('nov 22, 2028 22:13:30').getTime();
let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff/1000/60/60/24);
    let hours = Math.floor((dateDiff%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((dateDiff%(1000*60*60))/(1000*60));
    let seconds = Math.floor((dateDiff%(1000*60))/(1000));
    
    document.getElementById('days').innerHTML=days+'D';
    document.getElementById('hours').innerHTML=hours+'h';
    document.getElementById('minutes').innerHTML=minutes+'m';
    document.getElementById('seconds').innerHTML=seconds+'s';


    // ____clearInterval
    if(dateDiff<0){
        clearInterval(counter);
        document.getElementById('days').innerHTML='0D';
        document.getElementById('hours').innerHTML='0h';
        document.getElementById('minutes').innerHTML='0m';
        document.getElementById('seconds').innerHTML='0s';
        }

}, 1000)


// _____________________start num of characyer_______________________
$('#exampleFormControlTextarea1').keypress(function(){
    let count = 99;
    let lengthCharacter =document.getElementById('exampleFormControlTextarea1').value.length;
        document.getElementById('numCharacter').innerHTML=count-lengthCharacter;
 
        if(lengthCharacter>=100){
        document.getElementById('numCharacter').innerHTML='your available character finished';
        }
    })

    document.addEventListener('keydown' , function(e){
        if(e.code=='Backspace'){
            let count = 100;
            let lengthCharacter =document.getElementById('exampleFormControlTextarea1').value.length;
            document.getElementById('numCharacter').innerHTML=count-(lengthCharacter-1);

            if(lengthCharacter>101){
            document.getElementById('numCharacter').innerHTML='your available character finished';  
            }
        }
    }) 


