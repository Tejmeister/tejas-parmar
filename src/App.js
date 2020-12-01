import "./App.css";
import ReactGA from "react-ga";
import Header from "./Components/Header";
import React, { Component } from "react";
import { resume } from "./data";
import Footer from "./Components/Footer";
import About from "./Components/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <About data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
