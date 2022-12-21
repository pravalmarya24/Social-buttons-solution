const Button = (props) => {
  //  Write your code here.
  let {like-text,className} = prop;
  return (
      <Button className = {className}>{like-text}</Button>
  );

};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div className="btn-container">
            <Button like-text="Like" className = "like-btn"/>
            <Button like-text="Comment" className = "comment-btn"/>
            <Button like-text="Share" className = "share-btn"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
