import React, { FC } from "react";

import EditorComposer from './EditorComposer';
import Editor from './Editor';
import ToolbarPlugin from './plugins/ToolbarPlugin/ToolbarPlugin';

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

  import Divider from './ui/Divider';

  export interface ICapytaleEditorProps {
    isEditable?: boolean;
  }

const CapytaleEditor: React.FC<ICapytaleEditorProps> = ({isEditable = true}) => {
  return (
    <EditorComposer>
      <div className="editor-inner">
        <Editor draggableBlocksEnabled={true} hashtagsEnabled={true} isEditable={isEditable} locale="fr">
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
    </EditorComposer>
  );
};

export default CapytaleEditor;
