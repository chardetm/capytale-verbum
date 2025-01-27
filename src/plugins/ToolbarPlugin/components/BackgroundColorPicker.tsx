import React, { useCallback, useContext } from 'react';
import ToolbarContext from '../../../context/ToolbarContext';
import DropdownColorPicker from '../../../ui/DropdownColorPicker';
import { useTranslation } from 'react-i18next';

const BackgroundColorPicker = () => {
  const { bgColor, applyStyleText } = useContext(ToolbarContext);
  const { t } = useTranslation('toolbar');

  const onBgColorSelect = useCallback(
    (value: string) => {
      applyStyleText({ 'background-color': value });
    },
    [applyStyleText]
  );

  return (
    <DropdownColorPicker
      buttonClassName="toolbar-item color-picker"
      buttonAriaLabel={t('toolbar:backgroundColorPicker.Description')}
      buttonIconClassName="icon bg-color"
      color={bgColor}
      onChange={onBgColorSelect}
      title="bg color"
    />
  );
};

export default BackgroundColorPicker;
