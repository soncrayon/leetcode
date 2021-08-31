function branchSums(root) {	
      const sums = []; 
      calculateSums (root, 0, sums);
      return sums; 
  }
  
  const calculateSums = (node, currSum, sums) => {
      if (!node) return; 
      
      const newSum = currSum + node.value; 
      
      if (!node.left && !node.right) {
          sums.push(newSum);
          return; 
      }
      
      calculateSums (node.left, newSum, sums);
      calculateSums (node.right, newSum, sums); 
  }