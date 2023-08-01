function getRandomItem(random) {

   
    const randomIndex = Math.floor(Math.random() * random.length);

 
    const item = random[randomIndex];

    return item;
}

const array = ["Rock", 'Paper', "Scissors"];
const result = getRandomItem(array);

console.log(result);