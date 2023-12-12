// Your code here

Array.prototype.isEqual = function(array)
{
    return this.every((el,i)=>el === array[i]) ;
}
