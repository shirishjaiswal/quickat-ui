export interface BaseFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string;
    mainContainerStyles?: string;
    infoContainerStyles?: string;
    labelStyles?: string;
    descriptionStyles?: string;
    errorStyles?: string;
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
  
  export interface BaseSelectBoxProps extends BaseFieldProps {
      required?: boolean;
      disabled?: boolean;
      variant?: BoxVariant;
      boxContainerStyles?: string;
      boxStyle?: string;
      optionStyle?: string;
    }