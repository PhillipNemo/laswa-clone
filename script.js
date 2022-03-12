console.log('connected');
let time = document.querySelector("#time");
let place = document.querySelector("#location");
let amount = document.querySelector("#amount");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let fourth = document.querySelector(".fourth");
let fifth = document.querySelector(".fifth");
let sixth = document.querySelector(".sixth");
let seventh = document.querySelector(".seventh");
let eighth = document.querySelector(".eighth");



const all_terminal = [
    {
        terminal : 'Badore',
        destination : "Five Cowries",
        estimated_time : "Jetty 1 & Jetty 1",
        departure : `1 : 05 am `,
        arrival : `2 : 15 am `,
        departureTwo : `3 : 24 am `,
        arrivalTwo : `8 : 29 am `
    },
    {
        terminal : 'Apapa',
        destination : "Seven Cowries",
        estimated_time : "Metty 1 & Metty 1",
        departure : `3 : 10 am `,
        arrival : `4 : 35 am `,
        departureTwo : `1 : 05 am `,
        arrivalTwo : `2 : 15 am `
    },
    {
        terminal : 'Surulere',
        destination : "Ten Cowries",
        estimated_time : "Ketty 1 & Ketty 1",
        departure : `2 : 18 am `,
        arrival : `7 : 41 am `,
        departureTwo : `1 : 05 am `,
        arrivalTwo : `2 : 15 am `
    },
    {
        terminal : 'Lekki',
        destination : "Two Cowries",
        estimated_time : "Fetty 1 & Fetty 1",
        departure : `12 : 03 am `,
        arrival : `8 : 54 am `,
        departureTwo : `1 : 05 am `,
        arrivalTwo : `2 : 15 am `
    },
    {
        terminal : 'Ikorodu',
        destination : "Threee Cowries",
        estimated_time : "Petty 1 & Petty 1",
        departure : `4 : 12 am `,
        arrival :  `5 : 28 am `,
        departureTwo : `1 : 05 am `,
        arrivalTwo : `2 : 15 am `
    },
]

let i = 0;
const load = i => {
    const randomNumber =  Math.floor(Math.random() * 10);
    time.innerHTML = all_terminal[i].estimated_time;
    amount.innerHTML = all_terminal[i].destination;
    place.innerHTML = all_terminal[i].terminal;
    first.innerHTML = all_terminal[i].departure ;
    second.innerHTML =  all_terminal[i].arrival ;
    third.innerHTML =  all_terminal[i].departureTwo ;
    fourth.innerHTML = all_terminal[i].arrivalTwo ;
    fifth.innerHTML =  all_terminal[i].departure ;
    sixth.innerHTML =  all_terminal[i].arrival ;
    seventh.innerHTML = all_terminal[i].departureTwo ;
    eighth.innerHTML =  all_terminal[i].arrivalTwo ;
}

load(i)

function next (){
    if (i < all_terminal.length-1){
        i++
        load(i)
    }else{
        i = 0
        load(i)
    }
}

function previous (){
    if (i > 0 ){
        i -= 1;
        load(i);
    }else{
        i = 4;
        load(i);
       
    }
}





