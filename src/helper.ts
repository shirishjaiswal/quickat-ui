import { EventInterface, EventInterfaceValue } from "./type";

export const getEventFormat = (
    value: EventInterfaceValue,
    validationMessage: string | undefined = undefined,
  ): EventInterface => {
    return {
      target: {
        value: value,
        validationMessage: validationMessage,
      },
    };
  };