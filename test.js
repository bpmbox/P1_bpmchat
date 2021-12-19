'use strict';
//alert("test")

function pushFirabase(){
}

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

const App444 = () => {
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
    <iframe src="https://threejs.org/examples/#webgl_morphtargets_face" width=100% height=500></iframe>
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
      name: props.name,
      text: "",
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);

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

  saveTutorial(prop) {
    alert(JSON.stringify(prop))
    alert("compornent test" + this.state.name)
    //bin.saveTrutril -> saveTrutorial
    //saveTutorial -> Code:321:sendMesasge
    //言葉でいうと　Code３２１
    //class seaquace を各　状態遷移は　ボット制御
    //alert(this.state.name)
    //riraki Is Add   Dsiplay Is Change
    //Eveloy time change data
    //If get the Change Data  puto that Date to Dsiply
    //
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
          <button onClick=
          {
            ()=>this.saveTutorial(this.state)
          } className="btn btn-success">
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
