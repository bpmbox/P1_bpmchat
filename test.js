'use strict';

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
