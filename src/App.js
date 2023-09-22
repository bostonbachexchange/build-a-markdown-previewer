import './App.css';
import { useState } from 'react';
// import ReactMarkdown from 'react-markdown';
import 'font-awesome/css/font-awesome.min.css';
import { initialMarkdown } from './MarkDownData';
import { marked } from 'marked';

function App() {
  const [preview, setPreview] = useState(initialMarkdown)
  const [editorDetailsHidden, setEditorDetailsHidden] = useState(false)

  function handleChange(e){
    console.log(e.target.value)
    setPreview(e.target.value)
  }
  
  function changeDetails(){
    setEditorDetailsHidden(!editorDetailsHidden)
  }
  
  const editorBox = {
    border: '1px solid black',
    backgroundColor: "#87b5b5",
    marginTop: '17px',
    boxShadow: '5px 5px 5px 5px'
  }

  const previewBox = {
    margin: "40px",
    border: '1px solid black',
    backgroundColor: "#87b5b5",
    maxHeight: "800px",
    width: "50%",
    overflowY: "auto",
    
  }
  const editorHeading = {
    backgroundColor: "#4aa3a3",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: "8px",
    fontSize: '16px'
  }
  const textEditor = {
    backgroundColor: "#c0d8d8",
  }

  const renderMarkdown = () => {
    return { __html: marked(preview, { breaks: true }) };
  };

  return (
    <div className="App">
      <header className="App-header">

        <div id='editor-box' style={editorBox}>
          <div id='editor-heading' style={editorHeading}> 
            <div>
              <i className="fa fa-free-code-camp"></i> 
              <h2 style={{display: "inline", marginLeft: '3px'}}> Editor</h2>
            </div>
            <div onClick={changeDetails}>
              {!editorDetailsHidden && <i className="fa fa-arrows-alt"></i>}
              {editorDetailsHidden && <i className="fa fa-compress"></i>}
            </div>
          </div>
          <textarea id='editor' onChange={handleChange} defaultValue={initialMarkdown} rows={editorDetailsHidden? '20' : '40'} 
          cols="60" style={textEditor} ></textarea>
        </div>

        <div  style={previewBox}>
          <div style={editorHeading}>
            <div>
                <i className="fa fa-free-code-camp"></i> 
                <h2 style={{display: "inline"}}>Previewer</h2>
            </div>
           
            <div onClick={changeDetails}>
              {!editorDetailsHidden && <i className="fa fa-arrows-alt"></i>}
              {editorDetailsHidden && <i className="fa fa-compress"></i>}
            </div>
          </div>

            <div id='preview' 
            dangerouslySetInnerHTML={renderMarkdown()}
            style={{backgroundColor: "#c0d8d8", paddingTop: '0px', border: '1px solid black'}}>
          {/* <ReactMarkdown>
              {preview}
          </ReactMarkdown> */}
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
