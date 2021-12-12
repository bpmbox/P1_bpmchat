'use strict';
//alert("test")
const Test = ({ children }: { children: Node }) => {
  return (
    <div className="childrenTitle">
      <p>元々Componentに書かれているtext</p>
      {children}
    </div>
  );
};

const View = ({ children }: { children: Node }) => {
  return (
    <div className="childrenTitle">
      <p>元々Componentに書かれているtext</p>
      {children}
    </div>
  );
};

    const App444 = () =>{
  return (
    <div className="App">
      <Test>
        <p className="title">--- propsとして渡す値 ---</p>
        <p>こんな感じで子要素を渡せます!</p>
        <p>とっても便利</p>
      </Test>
    </div>
  );
}

