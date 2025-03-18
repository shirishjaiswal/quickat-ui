import React from 'react';
import { X } from 'lucide-react';
import { FieldInputProps } from '../input/field-input';
import { SelectBox, SelectBoxProps } from '../checkBox/select-box';
import { ClickButtonProps } from '../button/click-button';
import { BoxOptionType, ClickButton, FieldInput } from '..';


export type ModalBoxInputField =
  | (FieldInputProps & { type: "text" })
  | (SelectBoxProps & { type: "checkbox" });

export interface ModalBoxProps {
  className?: string;
  title: string;
  subtitle?: string;
  inputFields?: ModalBoxInputField[];
  buttons: ClickButtonProps[];
  isOpen: boolean;
  onClose: () => void;
  mainContainerStyle_mb?: string;
  backDropStyle_mb?: string;
  dialogContentStyle_mb?: string;
  closeButtonStyle_mb?: string;
  titleStyle_mb?: string;
  subTitleStyle_mb?: string;
}

export const ModalBox: React.FC<ModalBoxProps> = ({
  title,
  subtitle,
  inputFields = [],
  buttons,
  isOpen,
  onClose,
  mainContainerStyle_mb,
  dialogContentStyle_mb,
  closeButtonStyle_mb,
  titleStyle_mb,
  subTitleStyle_mb,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        id="backdrop"
        className={'bg-slate-300 backdrop-blur-xs fixed inset-0  bg-opacity-40 z-50'}
        onClick={onClose}
      />
      <dialog
        id="main-container"
        className={`fixed xs:w-5/6 inset-0 flex flex-col sm:w-2/6 md:w-3/5 lg:w-2/4 xl:w-2/5 z-50 w-full items-center justify-center rounded-lg p-2 shadow-lg md:p-4 ${mainContainerStyle_mb}`}
      >
        <ClickButton
          id="close-button"
          variant='none'
          size='none'
          onClick={onClose}
          className={`absolute right-3 top-3 text-gray-500 hover:text-red-700 focus:outline-none ${closeButtonStyle_mb}`}
        >
          <X />
        </ClickButton>
        <div className={`w-full ${dialogContentStyle_mb}`}>
          <h2
            id="dialog-title"
            className={`mb-1 border-b border-gray-200 text-xl font-semibold ${titleStyle_mb}`}
          >
            {title}
          </h2>
          <p
            id="dialog-subtitle"
            className={`mb-1 text-sm text-gray-600 ${subTitleStyle_mb}`}
          >
            {subtitle}
          </p>

          {inputFields.map((field, idx) =>
            field.type === 'checkbox' ? (
              <div className="mb-2" key={idx}>
                <SelectBox
                  label={field.label}
                  required={field.required}
                  description={field.description}
                  disabled={field.disabled}
                  variant={field.variant}
                  option={field.option as BoxOptionType}
                  errorMessage={field.errorMessage}
                  onTick={field.onTick}
                  mainContainerStyles={field.mainContainerStyles}
                  infoContainerStyles={field.infoContainerStyles}
                  labelStyles={field.labelStyles}
                  descriptionStyles={field.descriptionStyles}
                  boxContainerStyles={field.boxContainerStyles}
                  optionStyle={field.optionStyle}
                  boxStyle={field.boxStyle}
                  errorStyles={field.errorStyles}
                />
              </div>
            ) : (
              <div className="mb-2" key={idx}>
                <FieldInput
                  type={field.type ?? 'text'}
                  label={field.label}
                  placeholder={field.placeholder ?? ''}
                  value={field.value}
                  onChange={field.onChange}
                  required={field.required}
                  errorMessage={field.errorMessage}
                  mainContainerStyles={field.mainContainerStyles}
                  infoContainerStyles={field.infoContainerStyles}
                  labelStyles={field.labelStyles}
                  descriptionStyles={field.descriptionStyles}
                  inputStyles={field.inputStyles}
                  errorStyles={field.errorStyles}
                  description={field.description}
                  disabled={field.disabled}
                  onBlur={field.onBlur}
                  editable={field.editable}
                  verified={field.verified}
                />
              </div>
            ),
          )}

          <div className="flex justify-center gap-2 lg:justify-end">
            {buttons.map((button, index) => (
              <ClickButton
                key={index}
                onClick={button.onClick}
                variant={button.variant ?? 'default'}
                size="sm"
              >
                {button.label}
              </ClickButton>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
};
