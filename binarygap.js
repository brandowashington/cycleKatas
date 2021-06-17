function solution(N){
    let getOne = false;

    let divisionResult = N;
    let maxGap = 0;
    let zeroCount = 0;

    while(divisionResult != 0)
    {
        if(divisionResult%2)  //checks if even/odd
        {
            getOne = true;
            //restart counter
            zeroCount = 0;
        }
        else if(getOne)
        {
            zeroCount++;
            if(zeroCount > maxGap)
            {
                maxGap = zeroCount;
            }
        }
        divRes = Math.floor(divisionResult/2);
    }
    return maxGap
}


/* function intBin(int)
{
    return (int >>> 0).toString(2);
}

console.log(intBin(4)); */