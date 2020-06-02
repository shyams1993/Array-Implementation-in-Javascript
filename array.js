class myArray
{
    constructor()
    {
        this.length = 0;
        this.data = {};
    }
    get(index)
    {
        return this.data[index];
    }
    push(item)
    {
        this.data[this.length] = item;
        this.length++
        return this.length
    }
    pop()
    {
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1];
        this.length--
        return lastItem;
    }
    delete(index)
    {
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index)
    {
        for (let i=index; i< this.length; i++)
        {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--
    }
}

newArray = new myArray();
newArray.push(5);
newArray.push(6);
newArray.push(7);
newArray.push("hello");
newArray.pop()
newArray.delete(1)
newArray.delete(1)
console.log(newArray);
// console.log(newArray.get(0));
