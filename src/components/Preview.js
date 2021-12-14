import React from "react";
import ReactMarkdown from "react-markdown";
import ClipIcon from "./ClipIcon";
import { marked } from "marked";

const Preview = (props) => {

  return (
    <div className="container">
      <div className="container__heading">
        <ClipIcon />
        <h2 className="container__title">Preview</h2>
      </div>
      <div className="container__preview" id="preview">
          <ReactMarkdown children={props.term} />
      </div>
    </div>
  );
};

export default Preview;
