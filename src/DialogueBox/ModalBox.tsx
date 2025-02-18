import React from 'react';
import {FieldInput,
    FieldInputProps,
    Type
} from '../Input/FieldInput';
import { X } from 'lucide-react';
import { ClickButton,
  ClickButtonProps,
} from '../Button/ClickButton';
import { MonoTixBox,
  MonoTixBoxProps,
} from '../CheckBox/MonoTixBox';
import { BoxOptionType } from '../CheckBox/TixBox';

export type ModalFieldsType = Omit<FieldInputProps, 'type' | 'label' | 'description' | 'errorMessage'> & 
  Omit<MonoTixBoxProps, 'label' | 'description' | 'errorMessage'> & {
    type: Type | 'checkbox';
    label?: string;
    description?: string;
    errorMessage?: string;
  };

export type ModalBoxProps = {
  className?: string;
  title: string;
  subtitle?: string;
  inputFields?: ModalFieldsType[];
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
  backDropStyle_mb,
  dialogContentStyle_mb,
  closeButtonStyle_mb,
  titleStyle_mb,
  subTitleStyle_mb,
}) => {
  if (!isOpen) return null;

  return (
    <dialog
      id="main-container"
      className={`xs:min-w-[80%] fixed inset-0 z-40 flex min-w-[90%] items-center justify-center rounded-lg shadow-xl sm:min-w-[70%] md:min-w-[60%] lg:min-w-[50%] xl:min-w-[40%] ${mainContainerStyle_mb}`}
    >
      <div
        id="backdrop"
        className={`fixed inset-0 bg-slate-300 bg-opacity-50 ${backDropStyle_mb}`}
        onClick={onClose}
      />

      <div
        id="dialogContent"
        className={`relative z-10 w-full flex-col items-center justify-center rounded-lg bg-white p-2 shadow-lg md:p-4 ${dialogContentStyle_mb}`}
      >
        <ClickButton
          id="close-button"
          onClick={onClose}
          className={`absolute right-3 top-3 text-gray-500 hover:text-red-700 focus:outline-none ${closeButtonStyle_mb}`}
        >
          <X />
        </ClickButton>
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
              <MonoTixBox
                label={field.label}
                required={field.required}
                description={field.description}
                disabled={field.disabled}
                variant={field.variant}
                option={field.option as BoxOptionType}
                errorMessage={field.errorMessage}
                onTick={field.onTick}
                mainContainerStyles_mtb={field.mainContainerStyles_mtb}
                infoContainerStyles_mtb={field.infoContainerStyles_mtb}
                labelStyles_mtb={field.labelStyles_mtb}
                descriptionStyles_mtb={field.descriptionStyles_mtb}
                mtbContainerStyles_mtb={field.mtbContainerStyles_mtb}
                optionStyle_mtb={field.optionStyle_mtb}
                boxStyle_mtb={field.boxStyle_mtb}
                errorStyles_mtb={field.errorStyles_mtb}
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
                mainContainerStyles_fi={field.mainContainerStyles_fi}
                infoContainerStyles_fi={field.infoContainerStyles_fi}
                labelStyles_fi={field.labelStyles_fi}
                descriptionStyles_fi={field.descriptionStyles_fi}
                inputStyles_fi={field.inputStyles_fi}
                errorStyles_fi={field.errorStyles_fi}
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
  );
};

