//function Repeat(props) {
//  let items = [];
//  for (let i of props.contents) {
//    items.push(props.children(i))
//  }
//  return (<div>{items}</div>)
//}

function sleepByPromise(time){
  return new Promise(resolve => setTimeout(resolve, time));
}

export async function wait(time) {
  await sleepByPromise(time);
}
