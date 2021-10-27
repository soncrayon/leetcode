function shiftLinkedList(head, k) {
      let listLength = findListLength( head ); 
      let stepsIntoList = Math.abs(k) % listLength; 
      if (stepsIntoList === 0 ) return head; 
      return k > 0 ? shiftPositive( head, stepsIntoList) : shiftNegative( head, stepsIntoList ); 
  }
  
  const findListLength = ( node ) => {
      let length = 0;
      while ( node !== null ){
          node = node.next;
          length++; 
      }
      return length;
  }
  
  const shiftPositive = (head, k) => {
      let slow = head, fast = head; 
      while ( k > 0 ){
          fast = fast.next;
          k--; 
      }
      while ( fast.next !== null ){
          fast = fast.next;
          slow = slow.next; 
      }
      let newHead = slow.next;
      slow.next = null; 
      let newTail = newHead;
      while ( newTail.next !== null ){
          newTail = newTail.next; 
      }
      newTail.next = head; 
      return newHead; 
  }
  
  const shiftNegative = (head, k ) => {
      let curr = head;  
      while ( k > 1 ){
          curr = curr.next;
          k--; 
      }
      let newHead = curr.next;
      curr.next = null; 
      let newTail = newHead;
      while ( newTail.next !== null ){
          newTail = newTail.next; 
      }
      newTail.next = head; 
      return newHead;  
  }