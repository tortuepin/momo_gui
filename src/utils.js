
function Repeat(props) {
  let items = [];
  for (let i of props.contents) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}
