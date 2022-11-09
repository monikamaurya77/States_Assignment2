import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Output = (props) => {
   const markdown = props.markdowndata;
    return (
        <div className="output-screen">
            <h2>Output Screen (HTML)</h2>
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
        </div>
    );
}

export default Output;