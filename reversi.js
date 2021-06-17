//get the number n to return the reversed sequence from n to 1

const values = [5,4,3,2,1];
const reverseSeq = n =>
{
    const values = [];
    for(let i = n; n > 0; n--){
        values.push(n);
    }
    return values;
}