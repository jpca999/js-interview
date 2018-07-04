// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.

// Weave receives two queues as arguments and combines the
// contents of each into a new, third queue.

// The third queue should contain the *alterating* content
// of the two queues.


// =>   The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.

// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'


class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}


// function weave(queueOne, queueTwo){
//   console.log(' 60- weave called ');
//   console.log(' 62- queueOne ', queueOne);
//
//   const DataQueue =  new Queue();
//
//   while ( queueOne.peek() || queueTwo.peek() ) {
//     console.log('70-  DataQueue =', DataQueue );
//
//     if (queueOne.peek()) {
//       DataQueue.add(queueOne.remove());
//     }
//     if (queueTwo.peek()) {
//       DataQueue.add(queueTwo.remove());
//     }
//     console.log( ' 84 - DataQueue =', DataQueue );
//   }
//
//   return DataQueue;
//
// }


function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    console.log('89-  q =', q );
    if (sourceOne.peek()) {
      console.log('91-  inside peak ',  sourceOne.peek() );
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      console.log('96-  inside peak ',  sourceTwo.peek() );
      q.add(sourceTwo.remove());
    }
  }

  return q;
}



   const queueOne = new Queue();
   queueOne.add(1);
   queueOne.add(2);

   console.log('106 -  peak = ' ,  queueOne.peek() );
   console.log( '109 -  queueOne =', queueOne );
   console.log('97 -  queueOne ',  queueOne );

   const queueTwo = new Queue();
   queueTwo.add('Hi');
   queueTwo.add('There');

   const q = weave(queueOne, queueTwo);

   console.log('  q ',  q );

//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'















//
