import React, { useCallback, useContext } from 'react';
import VerbumSelect from '../../../ui/VerbumSelect';
import ToolbarContext from '../../../context/ToolbarContext';
import { FontOptions } from '../../../types';

const defaultFontSizeOptions: FontOptions = [
  ['default', 'Taille par défaut'],
  ['10px', '10px'],
  ['11px', '11px'],
  ['12px', '12px'],
  ['13px', '13px'],
  ['14px', '14px'],
  ['15px', '15px'],
  ['16px', '16px'],
  ['17px', '17px'],
  ['18px', '18px'],
  ['19px', '19px'],
  ['20px', '20px'],
];

interface IFontSizeDropdown {
  fontSizeOptions?: FontOptions;
}

const FontSizeDropdown = ({
  fontSizeOptions = defaultFontSizeOptions,
}: IFontSizeDropdown) => {
  const { fontSize, applyStyleText } = useContext(ToolbarContext);

  const onFontSizeSelect = useCallback(
    (e) => {
      if (e.target.value === 'default') {
        applyStyleText({ 'font-size': null });
        return;
      }
      applyStyleText({ 'font-size': e.target.value });
    },
    [applyStyleText]
  );

  return (
    <>
      <VerbumSelect
        className="toolbar-item font-size"
        onChange={onFontSizeSelect}
        options={fontSizeOptions}
        value={fontSize}
      />
      <i className="chevron-down inside" />
    </>
  );
};

export default FontSizeDropdown;
