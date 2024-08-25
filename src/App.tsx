import Editor, { BeforeMount, OnMount, Monaco } from '@monaco-editor/react';
import './App.css';
import { useRef } from 'react';

const App = () => {
  const monacoRef = useRef<Monaco>(null);

  const handleEditorWillMount: BeforeMount = (monaco) => {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  };

  const handleEditorDidMount: OnMount = (_editor, monaco) => {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    monacoRef.current = monaco;
  };

  const handleInsertCode = () => {
    const code = monacoRef.current.getValue();
    // Insert the code into the desired location or do something with it
    console.log(code);
    alert('Code inserted into the input field!');
  };

  return (
    <div className="App">
      <div className="chatgpt-editor-container">
        <div className="chatgpt-editor-toolbar">
          <div className="chatgpt-editor-toolbar-brand">
            ChatGPT Code Editor
          </div>
          <div className="chatgpt-editor-toolbar-buttons">
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={handleInsertCode}
            >
              Insert Code
            </button>
          </div>
        </div>
        <Editor
          className="chatgpt-editor"
          width="100%"
          height="100%"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// Write your code here"
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
        />
      </div>
    </div>
  );
};

export default App;
