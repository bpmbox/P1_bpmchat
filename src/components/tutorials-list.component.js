import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

import Tutorial from "./tutorial.component";
import AddTutorial from "./add-tutorial.component";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
   
    TutorialDataService.getAll().on("value", this.onDataChange);
    //wScroll();
  }

  componentWillUnmount() {
    TutorialDataService.getAll().off("value", this.onDataChange);
    //messageFeed.scrollTop = messageFeed.scrollHeight;
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      tutorials.push({
        key: key,
        title: data.title,
        name:data.name,
        text:data.text,
        description: data.description,
        published: data.published,
      });
    });

    this.setState({
      tutorials: tutorials,
    });
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }
//子供のPROPにデータを送る
  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { tutorials, currentTutorial, currentIndex } = this.state;
    console.log(JSON.stringify(tutorials))
    //let aaaa = ""
    return (
     
      <div className="list row">
        <div className="col-md-6">
          <h4>Tutorials List</h4>
          <AddTutorial />
          <div class="chat-ui-canvas">
          <div id="header" class="header header-scrolled">
              <div class="top-icons">
                <div class="back-arrow">
                  <div class="back-arrow-line back-arrow-line-1"></div>
                  <div class="back-arrow-line back-arrow-line-2"></div>
                  <div class="back-arrow-line back-arrow-line-3"></div>
                </div>
                <div class="phone-icon">
                  <img src="https://i.imgur.com/4OTkocV.png" height="50%"/>
                </div>
              </div>
              <div class="user-header-image"></div>
              <div class="user-name-header">
                <h1>Kenichi miyata</h1>

              </div>
            </div>
          <div id="message-feed" class="message-feed message-feed-unscrolled">
          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  <div>{tutorial.key}</div>
                  <div dangerouslySetInnerHTML={{ __html: tutorial.title }}></div>
                  <div dangerouslySetInnerHTML={{ __html: tutorial.description }}></div>
                  <div dangerouslySetInnerHTML={{ __html: tutorial.name }}></div>
                  <div dangerouslySetInnerHTML={{ __html: tutorial.text }}></div>
                  

                </li>
              ))
            }
          </ul>
          </div>
          </div>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <Tutorial
              tutorial={currentTutorial}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
      
    );
  }
}
