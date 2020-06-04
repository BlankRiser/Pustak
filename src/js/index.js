const EditorJS = require('@editorjs/editorjs');
const Header = require('@editorjs/header');
const List = require('@editorjs/list');
const LinkTool = require('@editorjs/link');
const Checklist = require('@editorjs/checklist');
const Paragraph = require('@editorjs/paragraph');
const Table = require('@editorjs/table');
const CodeTool = require('@editorjs/code');
const Marker = require('@editorjs/marker');
const Delimiter = require('@editorjs/delimiter');
const InlineCode = require('@editorjs/inline-code');


const editor = new EditorJS({
    autofocus: true,
    holder: 'editorjs',
    tools: {
        header: {
            class: Header,
            inlineToolbar: true
        },
        list: {
            class: List,
            inlineToolbar: true,
        },
        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        table: {
            class: Table,
            inlineToolbar: true,
            config: {
                rows: 2,
                cols: 3,
            },
        },
        code: CodeTool,
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
        },
        Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
        },
        linkTool: {
            class: LinkTool,
            config: {
                endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
            }
        },
        delimiter: Delimiter,

    },


});


