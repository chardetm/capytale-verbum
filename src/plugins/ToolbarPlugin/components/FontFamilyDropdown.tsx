import React, { useCallback, useContext } from 'react';
import VerbumSelect from '../../../ui/VerbumSelect';
import ToolbarContext from '../../../context/ToolbarContext';
import { FontOptions } from '../../../types';

const defaultFontFamilyOptions: FontOptions = [
  ['Arial', 'Arial'],
  ['Courier New', 'Courier New'],
  ['Georgia', 'Georgia'],
  ['Times New Roman', 'Times New Roman'],
  ['Trebuchet MS', 'Trebuchet MS'],
  ['Verdana', 'Verdana'],
];

interface IFontFamilyDropdown {
  fontOptions?: FontOptions;
}

const FontFamilyDropdown = ({
  fontOptions = defaultFontFamilyOptions,
}: IFontFamilyDropdown) => {
  const { fontFamily, applyStyleText } = useContext(ToolbarContext);

  const onFontFamilySelect = useCallback(
    (e) => {
      applyStyleText({ 'font-family': e.target.value });
    },
    [applyStyleText]
  );

  return (
    <>
      <VerbumSelect
        className="toolbar-item font-family"
        onChange={onFontFamilySelect}
        options={fontOptions}
        value={fontFamily}
      />
      <i className="chevron-down inside" />
    </>
  );
};

export default FontFamilyDropdown;
