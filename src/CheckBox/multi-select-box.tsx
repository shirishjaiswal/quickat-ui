import { useState } from 'react';
import { Square, SquareCheckBig } from 'lucide-react';
import { BoxOptionType, VARIANT_CLASSES } from './select-box';
import { BaseSelectBoxProps } from '../type';

export interface MultiSelectBoxProps extends BaseSelectBoxProps {
  options: BoxOptionType[];
  multiSelect?: boolean;
  onTick: (updatedOptions: BoxOptionType[], changedOption: BoxOptionType) => void;
}

export const MultiSelectBox: React.FC<MultiSelectBoxProps> = ({
  label,
  required = false,
  description,
  disabled,
  options,
  multiSelect = false,
  variant = 'default',
  onTick,
  errorMessage,
  mainContainerStyles,
  infoContainerStyles,
  labelStyles,
  descriptionStyles,
  boxContainerStyles,
  optionStyle,
  boxStyle,
  errorStyles,
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
      <div id="cb-container-list" className={`${boxContainerStyles}`}>
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
                className={`${VARIANT_CLASSES[variant]} ${boxStyle} rounded`}
              />
            ) : (
              <Square
                className={`${VARIANT_CLASSES[variant]} ${boxStyle} rounded`}
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
