let tickets_sold =81000;
let venue_capacity = 90000;
let sold_out = tickets_sold/venue_capacity;
let performer = "satinder";
let is_sold_out = true;
let is_repeat_show = true;
if( is_sold_out === true){
    console.log("All sold Out");
} else {
    console.log("Tickets Still Available");
}
if (sold_out >= .90){
    console.log("Almost Sold Out");
} else if (sold_out ===.5){
    console.log("Tickets selling fast");
} else {
    console.log("Tickets on sale now");
}

if (tickets_sold > venue_capacity){
    console.log("System Error: tickets sold must not increase the venue capacity");
} else if (tickets_sold === venue_capacity && is_sold_out === false) {
    console.log("System Error: if tickets are not sold out then total tickets sold must not increase the venue capacity");
} else if (performer === "alex" && is_sold_out === false){
    console.log("System Error: This performer always sold out, or perhaps it can't happen");
} else{
    console.log("enjoy the show");
}
if ((sold_out ===.9 || venue_capacity === 60000) && (sold_out === .7 || venue_capacity === 90000)){
    console.log("This is the special ocassion 90% of venue is full of 60000 and 70% of 90000 is full");
}else if (is_sold_out === true && is_repeat_show === true){
    console.log("This is the special ocassion, shows are sold out and getting repeated")
}