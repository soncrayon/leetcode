const getPermutations = (array) => {
      //instantiate permutations array to hold solution
      const permutations = [];
      // call helper method passing in array, an empty array for the current permutation
      // and pass in the permutations array
      helper( array, [], permutations ); 
      // after the helper function is complete return the permuations array 
      return permutations; 
  }
  
  //set helper function that takes in the arr, current permutation, and the array of permutations
  const helper = ( arr, currPerm, perms) => {
      //if the array passed in is empty and you have data in the current permutation,
      //push the current permutation into the overall permutations array
      if ( arr.length === 0 && currPerm.length > 0) {
          perms.push(currPerm); 
      } else {
          //otherwise, iterate over the array
          for ( let i = 0; i < arr.length; i++ ){
              // create a new array to pass into the recursive function that is 
              // all the elements of the array up to but not including the current item,
              // plus all the elements after the current item, not including the current item
              const newArr = arr.slice(0, i).concat(arr.slice(i + 1)); 
              // create a new permutation by adding the current item to the current permutation
              let newPerm = currPerm.concat(arr[i]); 
              // pass values to the function recursively
              helper ( newArr, newPerm, perms );
          }
      }
  }
  
  // essentially what's happening in the above recursive function is that all the elements
  // are being plucked out one at a time, the remaining elements are being squeezed together
  // to form an array of the other elements
  // the other elements are plucked in their turn and added to the current permutation until
  // the newArr passed in is empty-- at that point pushed to overall permutations
  // the rest of the helper calls on the recursive stack resolve (without doing anything)
  // and the for loop iterates i to do the same process for the second element...and so on
  // until the end of the original array--at that point all the permutations will be found
  // we jump back to the parent function and return all the permutations
  
  
  // O(n! * n^2) time b/c there are n! operations, n calls to helper methods, n operations 
  // removing a number and creating a new permutation
  
  // O(n! * n) time b/c there are n! permuations with length n; the space on the call stack
  // is also n, making the second n --> 2n, but we nix constants; 