export interface BaseFieldProps {
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  mainContainerStyles?: string;
  infoContainerStyles?: string;
  labelStyles?: string;
  descriptionStyles?: string;
  errorStyles?: string;
}

export type EventInterfaceValue =
  | string
  | boolean
  | string[]
  | number
  | object
  | object[];

export interface EventInterface {
  target: {
    value: EventInterfaceValue;
    validationMessage: string | undefined;
  };
}


