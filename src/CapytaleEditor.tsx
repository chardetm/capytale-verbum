import React from 'react';

import EditorComposer from './EditorComposer';
import Editor from './Editor';
import ToolbarPlugin from './plugins/ToolbarPlugin/ToolbarPlugin';

import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

import {
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
} from './plugins/ToolbarPlugin/components';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getRoot } from 'lexical';
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
} from '@lexical/markdown';

import { PLAYGROUND_TRANSFORMERS } from './plugins/MarkdownTransformers';

import './CapytaleEditor.css';

import Divider from './ui/Divider';

export interface ICapytaleEditorProps {
  isEditable?: boolean;
}

const CapytaleEditorContent = ({ isEditable }) => {
  const [editor] = useLexicalComposerContext();
  const [seeMarkdown, setSeeMarkdown] = React.useState(false);
  const [markdownValue, setMarkdownValue] = React.useState(`## Title
  
      \`\`\`jsx
      function Demo() {
        return <div>demo</div>
      }
      \`\`\`
      
      \`\`\`bash
      # Not dependent on uiw.
      npm install @codemirror/lang-markdown --save
      npm install @codemirror/language-data --save
      \`\`\`
      
      [weisit ulr](https://uiwjs.github.io/react-codemirror/)
      
      \`\`\`go
      package main
      import "fmt"
      func main() {
        fmt.Println("Hello, 世界")
      }
      \`\`\`
      `);

  const updateMarkdownValue = React.useCallback(() => {
    editor.update(() => {
      setMarkdownValue($convertToMarkdownString(PLAYGROUND_TRANSFORMERS));
    });
  }, [editor, setMarkdownValue]);
  const updateEditorValue = React.useCallback(() => {
    editor.update(() => {
      const root = $getRoot();
      $convertFromMarkdownString(markdownValue, PLAYGROUND_TRANSFORMERS);
      root.selectEnd();
    });
  }, [editor, markdownValue]);

  const handleMarkdownToggle = React.useCallback(() => {
    if (seeMarkdown) {
      updateEditorValue();
    } else {
      updateMarkdownValue();
    }
    setSeeMarkdown(!seeMarkdown);
  }, [editor, seeMarkdown]);

  return (
    <>
      <button onClick={handleMarkdownToggle}>WYSIWYG / Markdown</button>
      {seeMarkdown && (
        <CodeMirror
          value={markdownValue}
          height="100px"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value) => {
            setMarkdownValue(value);
          }}
        />
      )}
      <div
        className="editor-inner"
        style={{ display: seeMarkdown ? 'none' : 'block' }}
      >
        <Editor
          draggableBlocksEnabled={true}
          hashtagsEnabled={true}
          toogleMarkdownEnabled={true}
          isEditable={isEditable}
          locale="fr"
        >
          <ToolbarPlugin defaultFontSize="20px">
            <FontFamilyDropdown />
            <FontSizeDropdown />
            <Divider />
            <BoldButton />
            <ItalicButton />
            <UnderlineButton />
            <CodeFormatButton />
            <InsertLinkButton />
            <TextColorPicker />
            <BackgroundColorPicker />
            <TextFormatDropdown />
            <Divider />
            <InsertDropdown
              enableEquations={true}
              enableYoutube={true}
              enableImage={{
                enable: true,
                maxWidth: 600,
              }}
            />
            <Divider />
            <AlignDropdown />
          </ToolbarPlugin>
        </Editor>
      </div>
    </>
  );
};

const CapytaleEditor: React.FC<ICapytaleEditorProps> = ({
  isEditable = true,
}) => {
  return (
    <EditorComposer>
      <CapytaleEditorContent isEditable={isEditable} />
    </EditorComposer>
  );
};

export default CapytaleEditor;
