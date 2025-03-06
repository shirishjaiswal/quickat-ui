import { Square, SquareCheckBig } from 'lucide-react';
import { useState } from 'react';
import { BaseSelectBoxProps, BoxVariant } from '../type';

export interface BoxOptionType {
  label: string;
  checked: boolean;
  disabled?: boolean;
  required?: boolean;
}

export const VarientClass: Record<BoxVariant, string> = {
  default: 'text-blue-700',
  'f-default': 'text-white bg-blue-700',
  green: 'text-green-700',
  'f-green': 'text-white bg-green-700',
  red: 'text-red-700',
  'f-red': 'text-white bg-red-700',
  yellow: 'text-yellow-400',
  'f-yellow': 'text-white bg-yellow-400',
  purple: 'text-purple-700',
  'f-purple': 'text-white bg-purple-700',
};

export interface SelectBoxProps extends BaseSelectBoxProps {
  option: BoxOptionType;
  onTick: (updatedOptions: BoxOptionType) => void;
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
  const [cbOption, setOption] = useState<BoxOptionType>(option);

  const handleChange = () => {
    const newValue: BoxOptionType = { ...cbOption, checked: !cbOption.checked };
    setOption(newValue);
    onTick(newValue);
  };

  return (
    <div id="cb-container" className={`${mainContainerStyles}`}>
      <div id="info-container" className={`${infoContainerStyles}`}>
        {label && (
          <label
            id="label"
            className={`${labelStyles || 'text-md font-medium text-stone-950'} `}
          >
            {label} {required && <span className="text-rose-700">* </span>}
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
        <button
          key={cbOption.label}
          id={`option-${cbOption.label.toLowerCase()}`}
          className={`text-md flex items-center gap-1 rounded text-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 ${optionStyle}`}
          onClick={handleChange}
          disabled={cbOption.disabled || disabled}
        >
          {cbOption.checked ? (
            <SquareCheckBig
              className={`${VarientClass[variant]} ${boxStyle} rounded`}
            />
          ) : (
            <Square
              className={`${VarientClass[variant]} ${boxStyle} rounded`}
            />
          )}
          <label>{cbOption.label}</label>
          {cbOption.required && <span className="text-rose-700">* </span>}
        </button>
      </div>
      {errorMessage && (
        <div
          id="error-message"
          className={`text-xs font-light text-rose-700 ${errorStyles}`}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};