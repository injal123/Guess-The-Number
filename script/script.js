let input = document.getElementById('enter');
// let guesses = document.getElementById('user-guess');
// let tries = document.getElementById('guess');
let button = document.getElementById('button');

let photos= document.getElementById('photo');

let relation= document.getElementById('relational');
let guessed= document.getElementById('g');

let tr = document.getElementById('t');
let trin = 10;


// debugger;

let random ='';

window.onload = (event) =>{

    random = parseInt(Math.random()*101);
    console.log(random);
}



button.addEventListener( 'click', function(){
if(trin>0){
    if(input.value==random)
    {
        console.log("match");
        photos.style.display='block';

        relation.innerHTML='ohhh...you got it right, congrats !!!'
    }

    if(input.value=='')
    {
        relation.innerHTML="C'mon Enter some number !!!"
    }


    
    else if(input.value % 1 !==0 )
    {
        relation.innerHTML='Your number is in decimal. You gotta enter integer value.'
    }




    else if(input.value>100)
    {
        relation.innerHTML='Your guess number exceeds 100'
    }

    else if(input.value<0)
    {
        relation.innerHTML='Your guess number subceed 0'
    }


    else if(input.value>random)
    {
        relation.innerHTML='Your no. is greater than actual no'

        guessed.innerHTML=guessed.innerHTML+`${input.value} ,`;

        trin--;
        tr.innerHTML = `Tries remaining : ${trin}`

    } 

    else if(input.value<random)
    {
        relation.innerHTML='Your  no. is smaller than actual no'

        guessed.innerHTML=guessed.innerHTML+`${input.value} ,`;

        trin--;
        tr.innerHTML = `Tries remaining : ${trin}`

    } 

   
    
    else{

        console.log("no match");
    }
}
else{

    relation.innerHTML='Game over !!'
}
});







// button.addEventListener('click' , function() {

//     console.log(input.value);


// });


