// ------  R E C U R S I O N
//

function countDown(num)
{
    if(num === Math.floor(1250/2))
    {
        console.log("WOOHAH");
    }
    else if(num <= 0)
    {
        console.log("GOTCHU ALL IN CHECK");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(1250);