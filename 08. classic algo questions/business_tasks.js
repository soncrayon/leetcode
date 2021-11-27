const businessTasks = ( linkedList, n ) => {
    let curr = linkedList;
    while ( curr.next !== null ){
        let moves = n; 
        while ( moves > 1 ){
            curr = curr.next;
            moves--; 
        }
        if ( curr !== curr.next.next) {
            curr.next = curr.next.next;
            curr = curr.next; 
        } else {
            curr.next = null; 
        }
    }
    return curr; 
}

// 1 -> 2 -> 3
// ^         v 
// 6 <- 5 <- 4

// n = 3;

//4 comes out, then its 3 to 5
//curr is 5
//curr next is 6
//2 comes out, then it's 1 oto 3
//curr is 1
//curr next is 3
//1 comes out, then its 6 to 3
//curr is 6
//curr next is 3
//3 comes out, then its 6 to 5
//curr is 6
//curr next is 5

//6 comes out and curr next is set to null
//jump out of for loop and return 5 