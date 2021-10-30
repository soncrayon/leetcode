class SetOfStacks {
    constructor(num){
        this.set = [[num]]; 
        this.limit = 3; 
    }

    getActiveStack(){
        return this.set[this.set.length - 1]; 
    }

    push(num){
        let activeStack = this.getActiveStack(); 
        if ( activeStack.length >= this.limit ){
            this.set.push( [num] ); 
        } else {
            activeStack.push(num); 
        }
    }

    pop(){
        let activeStack = this.getActiveStack(); 
        let poppedNum = activeStack.pop();
        if ( activeStack.length === 0 ){
            this.set.pop(); 
        }
        return poppedNum; 
    }

    popAt(idx){
        let activeStack = this.set[idx]; 
        let poppedNum = activeStack.pop();
        if ( activeStack.length === 0 ){
            this.set.pop(); 
        }
        return poppedNum; 
    }
}

const mySet = new SetOfStacks(1); 
mySet.push(3); 
mySet.push(5); 
mySet.push(7); 
mySet.push(9); 
mySet.push(11); 
mySet.push(13); 
mySet.push(15);

mySet.popAt(1)

console.log(mySet)