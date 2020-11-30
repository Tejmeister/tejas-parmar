import "./App.css";
import $ from "jquery";
import ReactGA from "react-ga";
import Header from "./Components/Header";
import React, { Component } from "react";
import { resume } from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    this.setState({ resumeData: resume });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
