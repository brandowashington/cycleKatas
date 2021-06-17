//Fisher-Yates Algo
function shuffle(array)
{
    var currentIndex = array.length, tempValue, randomIndex;

    while (0 !== currentIndex)
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
    return array;
}
//make intern cycle array
const cycle7 = ["Kuyetsim", "Marcell", "Chia", "Monday", "Elijah", "Hydea", "Yuki", "Xai", "Michael", "Steven", "Jason", "Bernice", "Natalie", "DeAndre"];
shuffle(cycle7);
//set up partition
const half = Math.ceil(cycle7.length/2);

const teamA = cycle7.splice(0, half);
const teamB = cycle7.splice(-half);

console.log(teamA);
console.log(teamB);