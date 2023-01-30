export function Post(props) {
  console.log(props);

  return (
    <div>
      <strong>{props.author}</strong>
      <hr />
      <p>{props.content}</p>
    </div>
  );
}
