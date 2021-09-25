class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function heightBalancedBinaryTree(tree) {
    // Write your code here.
    return isHeightBalanced(tree); //todo
  }
  
  
  
  class TreeInfo {
      constructor(diameter, height){
          this.diameter = diameter;
          this.height = height; 
      }
  }