class MyQueue {
    constructor(num){
        //push pop stack
        this.stack1 = [ num ];
        //unshift shift stack
        this.stack2 = [ num ]; 
    }

    enter(num){
        this.stack1.push(num);
        this.stack2.unshift(num); 
    }

    exit(){
        
    }
}