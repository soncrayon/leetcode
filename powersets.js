const powerset = (array) => {
    // Write your code here.
      // initialize the powersets array to contain the empty set
      // even if the input array is empty, always return at least the empty powerset 
      const powerSets = [[]]; 
      // loop through the input array 
      for ( let i = 0; i < array.length; i++ ){
          // set the powersets length at the start of every loop because it will be longer,
          // after the second loop completes
          const length = powerSets.length; 
          // loop through each element in the existing powersets
          for ( let j = 0; j < length; j++) {
              // grab the element in the powerset 
              const currentSubset = powerSets[j];
              // push the current element in the input array into each element in the powersets
              // then push all the arrays just created into the powersets 
              powerSets.push( currentSubset.concat(array[i])); 
          }
      }
      return powerSets; 
  }