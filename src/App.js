import Input from './components/Input';
import Output from './components/Output';
import React, {useState} from 'react';

function App() {

const [markdownlang, setMarkdownlang] = useState("");


  return (
    <div style={{display: "flex"}}>
    <Input setdatafn={setMarkdownlang}/>
      <Output markdowndata={markdownlang} />
    </div>
  );
}

export default App;
