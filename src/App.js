import React, { Component } from "react";
import "./App.css";
import { FormIt } from "https://formit3d.github.io/SharedPluginUtilities/FormIt.mod.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: "",
    };
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(e) {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value,
    });
    console.log(e.target.files[0]);

    console.log("openSketch(): start", e.target.value);
    FormIt.OpenFile(e.target.value);
    console.log("openSketch(): end: ", e.target.value);
  }

  render() {
    return (
      <div>
        <input
          accept="model/x-formit, .axm"
          id="file-axm"
          type="file"
          file={this.state.file}
          value={this.state.fileName}
          onChange={this.handleFileChange}
        />
        Select FormIt File
      </div>
    );
  }
}

export default App;
