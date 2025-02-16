import { useState } from 'react';
import { Square, SquareCheckBig } from 'lucide-react';

export interface BoxOptionType {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
}

export type BoxVariant =
  | 'default'
  | 'f-default'
  | 'green'
  | 'f-green'
  | 'red'
  | 'f-red'
  | 'yellow'
  | 'f-yellow'
  | 'purple'
  | 'f-purple';

export const variantClasses: Record<BoxVariant, string> = {
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

export type TixBoxProps = {
  label?: string;
  required?: boolean;
  description?: string;
  disabled?: boolean;
  options: BoxOptionType[];
  multiSelect?: boolean;
  variant?: BoxVariant;
  onTick: (updatedOptions: BoxOptionType[], changedOption: BoxOptionType) => void;
  errorMessage?: string;
  mainContainerStyles_tb?: string;
  infoContainerStyles_tb?: string;
  labelStyles_tb?: string;
  descriptionStyles_tb?: string;
  tbContainerStyles_tb?: string;
  optionStyle_tb?: string;
  boxStyle_tb?: string;
  errorStyles_tb?: string;
}

export const TixBox: React.FC<TixBoxProps> = ({
  label,
  required = false,
  description,
  disabled,
  options,
  multiSelect = false,
  variant = 'default',
  onTick,
  errorMessage,
  mainContainerStyles_tb: mainContainerStyles,
  infoContainerStyles_tb: infoContainerStyles,
  labelStyles_tb: labelStyles,
  descriptionStyles_tb: descriptionStyles,
  tbContainerStyles_tb: cbContainerStyles,
  optionStyle_tb: optionStyle,
  boxStyle_tb: boxStyle,
  errorStyles_tb: errorStyles,
}) => {
  const [cbOptions, setOptions] = useState<BoxOptionType[]>(options);

  const handleSingleSelect = (idx: number) => {
    const newValue: BoxOptionType[] = cbOptions.map((option, index) =>
      index === idx
        ? {
            ...option,
            checked:
              option.disabled || disabled
                ? option.checked
                : required
                  ? true
                  : !option.checked,
          }
        : { ...option, checked: false },
    );
    setOptions(newValue);
    onTick(newValue, newValue[idx]);
  };

  const handleMultiSelect = (idx: number) => {
    const newValue: BoxOptionType[] = cbOptions.map((option, index) =>
      index === idx
        ? {
            ...option,
            checked:
              option.disabled || disabled ? option.checked : !option.checked,
          }
        : option,
    );
    setOptions(newValue);
    onTick(newValue, newValue[idx]);
  };

  const handleChange = (idx: number) => {
    if (multiSelect) handleMultiSelect(idx);
    else handleSingleSelect(idx);
  };

  return (
    <div id="cb-container" className={`${mainContainerStyles}`}>
      <div id="info-container" className={`${infoContainerStyles}`}>
        {label && (
          <label
            id="label"
            className={`text-md font-medium text-stone-950 ${labelStyles}`}
          >
            {label} {required && <span className="text-rose-700">* </span>}
          </label>
        )}
        <p
          id="description"
          className={`text-xs font-light text-zinc-800 ${descriptionStyles}`}
        >
          {description}
        </p>
      </div>
      <div id="cb-container-list" className={`${cbContainerStyles}`}>
        {cbOptions.map((option, idx) => (
          <button
            key={option.label}
            id={`option-${option.label.toLowerCase()}`}
            className={`text-md flex items-center gap-2 rounded text-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 ${optionStyle}`}
            onClick={() => handleChange(idx)}
            disabled={option.disabled || disabled}
          >
            {option.checked ? (
              <SquareCheckBig
                className={`${variantClasses[variant]} ${boxStyle} rounded`}
              />
            ) : (
              <Square
                className={`${variantClasses[variant]} ${boxStyle} rounded`}
              />
            )}
            <label>{option.label}</label>
            {option.required && <span className="text-rose-700">* </span>}
          </button>
        ))}
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
