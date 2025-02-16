import { Square, SquareCheckBig } from 'lucide-react';
import {
  BoxVariant,
  BoxOptionType,
  variantClasses,
} from './TixBox';
import { useState } from 'react';

export interface MonoTixBoxProps {
  label?: string;
  required?: boolean;
  description?: string;
  disabled?: boolean;
  option?: BoxOptionType;
  variant?: BoxVariant;
  onTick?: (updatedOptions: BoxOptionType) => void;
  errorMessage?: string;
  mainContainerStyles_mtb?: string;
  infoContainerStyles_mtb?: string;
  labelStyles_mtb?: string;
  descriptionStyles_mtb?: string;
  mtbContainerStyles_mtb?: string;
  optionStyle_mtb?: string;
  boxStyle_mtb?: string;
  errorStyles_mtb?: string;
}

export const MonoTixBox: React.FC<MonoTixBoxProps> = ({
  label,
  required = false,
  description,
  disabled,
  option = {
    label : "TickBox",
    required: true,
    checked: false
  },
  variant = 'default',
  onTick = (updatedOptions: BoxOptionType) => {},
  errorMessage,
  mainContainerStyles_mtb: mainContainerStyles_CB,
  infoContainerStyles_mtb: infoContainerStyles_CB,
  labelStyles_mtb: labelStyles_CB,
  descriptionStyles_mtb: descriptionStyles_CB,
  mtbContainerStyles_mtb: cbContainerStyles_CB,
  optionStyle_mtb: optionStyle_CB,
  boxStyle_mtb: boxStyle_CB,
  errorStyles_mtb: errorStyles_CB,
}) => {
  const [cbOption, setOption] = useState<BoxOptionType>(option);
  
  const handleChange = () => {
    const newValue: BoxOptionType = { ...cbOption, checked: !cbOption.checked };
    setOption(newValue);
    onTick(newValue);
  };

  return (
    <div id="cb-container" className={`${mainContainerStyles_CB}`}>
      <div id="info-container" className={`${infoContainerStyles_CB}`}>
        {label && (
          <label
            id="label"
            className={`text-md font-medium text-stone-950 ${labelStyles_CB}`}
          >
            {label} {required && <span className="text-rose-700">* </span>}
          </label>
        )}
        <p
          id="description"
          className={`text-xs font-light text-zinc-800 ${descriptionStyles_CB}`}
        >
          {description}
        </p>
      </div>
      <div id="cb-container-list" className={`${cbContainerStyles_CB}`}>
        <button
          key={cbOption.label}
          id={`option-${cbOption.label.toLowerCase()}`}
          className={`text-md flex items-center gap-1 rounded text-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 ${optionStyle_CB}`}
          onClick={handleChange}
          disabled={cbOption.disabled || disabled}
        >
          {cbOption.checked ? (
            <SquareCheckBig
              className={`${variantClasses[variant]} ${boxStyle_CB} rounded`}
            />
          ) : (
            <Square
              className={`${variantClasses[variant]} ${boxStyle_CB} rounded`}
            />
          )}
          <label>{cbOption.label}</label>
          {cbOption.required && <span className="text-rose-700">* </span>}
        </button>
      </div>
      {errorMessage && (
        <div
          id="error-message"
          className={`text-xs font-light text-rose-700 ${errorStyles_CB}`}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};