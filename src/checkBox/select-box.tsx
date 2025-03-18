import { Square, SquareCheckBig } from 'lucide-react';
import { useState } from 'react';
import { EventInterface } from '../type';
import { BaseSelectBoxProps, BoxOptionType, VarientClass } from './types';
import { getEventFormat } from '../helper';
import { ClickButton } from '..';


export interface SelectBoxOnChangeEvent extends EventInterface {
  target: {
    value: BoxOptionType;
    validationMessage: string | undefined;
  };
}

export interface SelectBoxProps extends BaseSelectBoxProps {
  option: BoxOptionType;
  onTick: (updatedOptions: SelectBoxOnChangeEvent) => void;
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  required = false,
  description,
  disabled,
  option,
  variant = 'default',
  onTick,
  errorMessage,
  mainContainerStyles,
  infoContainerStyles,
  labelStyles,
  descriptionStyles,
  boxContainerStyles,
  boxStyle,
  optionStyle,
  errorStyles,
}) => {
  const [sbOption, setOption] = useState<BoxOptionType>(option);

  const handleChange = () => {
    const newValue: BoxOptionType = { ...sbOption, checked: !sbOption.checked };
    setOption(newValue);
    const event = getEventFormat(newValue, getError()) as SelectBoxOnChangeEvent;
    onTick(event);
  };

  const getError = () => {
    if (required && !sbOption.checked) {
      return 'Field is required';
    };
  };

  return (
    <div id="cb-container" className={`${mainContainerStyles}`}>
      <div id="info-container" className={`${infoContainerStyles}`}>
        {label && (
          <label
            id="label"
            className={`${labelStyles || 'text-md font-medium text-stone-950'} ${required ? 'after:content-["*"] after:text-rose-700 after:ml-1' : ''} `}
          >
            {label}
          </label>
        )}
        <p
          id="description"
          className={`${descriptionStyles || 'text-xs font-light text-zinc-800'}`}
        >
          {description}
        </p>
      </div>
      <div id="cb-container-list" className={`${boxContainerStyles}`}>
        <div className="flex items-center gap-2">
          <ClickButton
            variant='none'
            size='none'
            key={sbOption.label}
            id={`option-${sbOption.label.toLowerCase()}`}
            className={`text-md flex gap-1 rounded text-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 ${optionStyle}`}
            onClick={handleChange}
            disabled={sbOption.disabled || disabled}
          >
            {sbOption.checked ? (
              <SquareCheckBig
                className={`${VarientClass[variant]} ${boxStyle} rounded`}
              />
            ) : (
              <Square
                className={`${VarientClass[variant]} ${boxStyle} rounded`}
              />
            )}
          </ClickButton>
          <label className={`${optionStyle} ${sbOption.required ? 'after:content-["*"] after:text-rose-700 after:ml-1' : ''} `}>{sbOption.label}</label>
        </div>
      </div>
      {errorMessage && (
        <div
          id="error-message"
          className={`text-rose-700 ${errorStyles ?? 'text-sm font-medium'}`}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};