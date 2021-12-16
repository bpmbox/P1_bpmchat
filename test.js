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
    


    class Greeting extends React.Component {
  render() {
    return <h1>Hi!</h1>;
  }
}

    class VoteButton2 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          voted: false,
          name: "",
          text: "",
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeText = this.onChangeText.bind(this);

      }

      onChangeText(e) {
        this.setState({
          text: e.target.value,
        });
      }


      onChangeTitle(e) {
        this.setState({
          title: e.target.value,
        });
      }

      onChangeName(e) {
        this.setState({
          name: e.target.value,
        });
      }

      saveTutorial() {
      alert("test")
        let data = {
          title: this.state.title,
          description: this.state.description,
          published: false,
          name: this.state.name,
          text: this.state.text,
        };
        /*
            TutorialDataService.create(data)
              .then(() => {
                console.log("Created new item successfully!");
                this.setState({
                  submitted: true,
                });
              })
              .catch((e) => {
                console.log(e);
              });*/
      }

      render() {
        if (this.state.voted) {
          return (
            <div>
              <div className="form-group">
                <label htmlFor="description">text</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="text"
                  required
                  value={this.state.text}
                  onChange={this.onChangeText}
                  name="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">nme</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </div>
              <button onClick={this.saveTutorial()} className="btn btn-success">
                Submit
            </button>
              <button onClick={
                () => this.setState({ voted: false })
              }>
                voted
                        </button>
            </div>
          )
        } else {
          return (
            <button onClick={() => this.setState({ voted: true })}>
              vote
            </button>
          );
        }
      }
    }

    class VoteButton extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          voted: false,
          name: "",
          text: "",
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeText = this.onChangeText.bind(this);

      }

      onChangeText(e) {
        this.setState({
          text: e.target.value,
        });
      }

      onChangeTitle(e) {
        this.setState({
          title: e.target.value,
        });
      }

      onChangeName(e) {
        this.setState({
          name: e.target.value,
        });
      }

      saveTutorial() {
      alert("compornent test")
        alert(this.state.name)
        let data = {
          title: this.state.title,
          description: this.state.description,
          published: false,
          name: this.state.name,
          text: this.state.text,
        };
        /*
            TutorialDataService.create(data)
              .then(() => {
                console.log("Created new item successfully!");
                this.setState({
                  submitted: true,
                });
              })
              .catch((e) => {
                console.log(e);
              });*/
      }

      render() {
        if (this.state.voted) {
          return (
            <div>
              <div className="form-group">
                <label htmlFor="description">text</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="text"
                  required
                  value={this.state.text}
                  onChange={this.onChangeText}
                  name="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">name</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </div>
              <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
            </button>
              <button onClick={
                () => this.setState({ voted: false })
              }>
                voted
                        </button>
            </div>
          )
        } else {
          return (
            <button onClick={() => this.setState({ voted: true })}>
              vote
            </button>
          );
        }
      }
    }


