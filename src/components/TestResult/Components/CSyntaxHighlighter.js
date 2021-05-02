import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

function CSyntaxHighlighter({code}) {
    const style = {
        padding: "40px 40px 40px 20px",
        borderRadius: "3px",
        width: "max-content",
    }

    return (
        <SyntaxHighlighter
            language="c"
            style={atomOneDark}
            customStyle={style}
            wrapLongLines
            showLineNumbers>
            {code}
        </SyntaxHighlighter>
    )
}

export default CSyntaxHighlighter;