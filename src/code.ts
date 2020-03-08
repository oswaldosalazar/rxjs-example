import { Observable, Subject, interval  } from 'rxjs';
import { skipUntil } from 'rxjs/operators'

let observable1 = Observable.create((data:any) => {
  let i =1;
  setInterval(() => {
    data.next(i++)
  }, 1000);
})

let observable2 = new Subject;

setTimeout(() => {
  observable2.next('Hey!')
}, 5000);

let newObs = observable1.pipe(skipUntil(observable2));

newObs.subscribe((x:any) => addItem(x))

function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}