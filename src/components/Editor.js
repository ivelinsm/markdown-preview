import React, { useState } from "react";
import { EditIcon } from "./EditIcon";
import Preview from "./Preview";

const Editor = () => {
  const placeholder = `
  # Welcome to my React Markdown Previewer! \n
## This is a sub-heading... \n
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
    function anotherExample(firstLine, lastLine) {
        if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
            return multiLineCode;
        }
    }
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images: \n
![Image](https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png)`

  const [term, setTerm] = useState(placeholder);

  return (<React.Fragment>
      <h1>Markdown Previewer</h1>
      <div className="container">
        <div className="container__heading">
          <EditIcon />
          <h2 className="container__title">Editor</h2>
        </div>
        <textarea
          className="container__editor_textarea"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          id="editor"
        ></textarea>
      </div>
      <Preview term={term} />
      </React.Fragment>
  );
};

export default Editor;
