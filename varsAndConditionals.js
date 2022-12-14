/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Anakin and
    Obiwan.
*/ 


let obiwanAttack = 25;
let anakinAttack = 35;

if (obiwanAttack > anakinAttack)
{console.log('Obiwan is stronger!')} 
else if (anakinAttack > obiwanAttack) 
{console.log('Anakin has the power!')}
else 
{ console.log('Force is with them both!')}

let obiwanHealth = 100;
let obiwanDefense = 0;

obiwanDefense += 25;

if (obiwanHealth <= (anakinAttack - obiwanDefense)){console.log('Obiwan has been slain')}
else {
    obiwanHealth -= (anakinAttack - obiwanDefense);
    console.log(`obiwan's health is ${obiwanHealth}`)};

if (obiwanHealth + 50 >= 100) {
    obiwanHealth = 100;
} else {
    obiwanHealth + 50;
}

let coinLandsHeads = false;

if (coinLandsHeads === true){
    console.log ('fight continues');
} else {console.log ('Obiwan is allowed to retreat')};

for (let i = 0; i < 5; i++) {
    
    obiwanHealth -= (anakinAttack - obiwanDefense);
    console.log(`obiwan's health is ${obiwanHealth}`) 
    
}

while (obiwanHealth > 0) {
    obiwanHealth -= (anakinAttack - obiwanDefense);
    console.log(`obiwan's health is ${obiwanHealth}`) 
}

if (obiwanHealth <= 0) {
    console.log ('obiwan is dead')
} else if (obiwanHealth > 0){
    console.log ('the fight continues')
}