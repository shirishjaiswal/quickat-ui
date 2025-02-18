import { debounce } from 'lodash';
import {
  EyeOff,
  Eye,
  CircleCheck,
  CircleAlert,
  Pencil,
  PencilOff,
} from 'lucide-react';
import React, { useState } from 'react';
export type Type = "text" | "password" | "email" | "date" | "month" | "tel" | "number" | "hidden";
export type FieldInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: Type;
  label?: string;
  description?: string;
  verified?: boolean | "none";
  editable?: boolean;
  errorMessage?: string;
  mainContainerStyles_fi?: string;
  infoContainerStyles_fi?: string;
  labelStyles_fi?: string;
  descriptionStyles_fi?: string;
  inputStyles_fi?: string;
  errorStyles_fi?: string;
};

export const FieldInput: React.FC<FieldInputProps>  = ({
  type = 'text',
  label,
  verified = 'none',
  editable,
  description,
  value,
  onChange,
  onBlur,
  errorMessage,
  mainContainerStyles_fi,
  infoContainerStyles_fi,
  labelStyles_fi,
  descriptionStyles_fi,
  inputStyles_fi,
  errorStyles_fi,
  ...props
}: FieldInputProps) =>{
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [inputValue, setInputValue] = useState(value || '');

  const debouncedOnChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      onChange?.({
        ...e,
        target: {
          ...e.target,
          value: inputValue,
          validationMessage: getError(inputValue),
        },
      });
    },
    300,
  );
  const getError = (value: string) => {
    let error = "";
    if (props.required && value.trim() === '') {
      error = 'Field is required';
    } else if (props.min && value.length < +props.min) {
       error =  `Minimum ${props.min} characters are required`;
    } else if (props.max && value.length > +props.max) {
       error =  `Maximum ${props.max} characters are required`;
    } else if(props.pattern && !props.pattern.match(value)) {
       error =  "Invalid format";
    }else if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
         error =  'Invalid email address';
      }
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedOnChange(e);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if(editable) setIsEditable(false);
    onBlur?.(e);
  };

  return (
    <div id="ipf-container" className={mainContainerStyles_fi} >
      <div id="info-container" className={infoContainerStyles_fi}>
        {label && (
          <label
            id="label"
            className={`text-md font-medium text-stone-950 ${labelStyles_fi}`}
          >
            {label} {props.required && <span className="text-rose-700">* </span>}
          </label>
        )}
        <p
          id="description"
          className={`text-xs font-light text-zinc-800 ${descriptionStyles_fi}`}
        >
          {description}
        </p>
      </div>

      <div id="input-container" className="relative flex items-center">
        <input
          className={`text-md min-h-9 w-full rounded-sm border p-1 text-neutral-950 placeholder-zinc-500 placeholder:text-sm focus:border focus:outline-none ${
            props.disabled || !isEditable
              ? 'cursor-not-allowed bg-gray-100 text-neutral-400'
              : 'bg-white'
          } ${inputStyles_fi} ${type === 'password' && 'pr-10'} ${
            errorMessage
              ? 'border-rose-600 focus:border-rose-700 focus:bg-rose-300/10'
              : 'focus:border-zinc-300 focus:bg-slate-400/10'
          }`}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          placeholder={props.placeholder}
          value={inputValue}
          disabled={props.disabled || !isEditable}
          onChange={handleChange}
          onBlur={handleOnBlur}
          {...props}
        />
        {type !== 'hidden' && (
          <div className="absolute right-2 top-1/2 flex -translate-y-1/2 gap-1">
            {type === 'password' && (
              <button
                id="show-password-button"
                className="transform text-gray-400"
                type="button"
                onClick={() => setPasswordVisible(!isPasswordVisible)}
                aria-label={
                  isPasswordVisible ? 'Hide password' : 'Show password'
                }
              >
                {isPasswordVisible ? (
                  <Eye className="h-5 w-5" />
                ) : (
                  <EyeOff className="h-5 w-5" />
                )}
              </button>
            )}

            {type !== 'password' &&
              type !== 'month' &&
              type !== 'date' &&
              editable && (
                <button
                  id="edit-toggle"
                  className="transform text-gray-500"
                  type="button"
                  onClick={() => setIsEditable(!isEditable)}
                  aria-label={isEditable ? 'Disable editing' : 'Enable editing'}
                >
                  {isEditable ? (
                    <PencilOff className="h-5 w-5" />
                  ) : (
                    <Pencil className="h-5 w-5" />
                  )}
                </button>
              )}
            {verified !== 'none' &&
              (type === 'text' || type === 'email' || type === 'tel') &&
              (verified ? (
                <CircleCheck
                  id="verified"
                  size={18}
                  className="transform text-green-500"
                />
              ) : (
                <CircleAlert
                  id="unverified"
                  size={18}
                  className="transform text-red-500"
                />
              ))}
          </div>
        )}
      </div>
      {errorMessage && (
        <div
          id="error-message"
          className={`text-xs font-light text-rose-700 ${errorStyles_fi}`}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};