import { Input } from "./ValidatorInput";

export function TelephoneInput(props: any) {
  return (
    <Input
      mask="(___) ___-____"
      maskSlots="_"
      dataAccept={/\d/}
      showFullMaskWhileTyping={true}
      exactLength={10}
      validateUnMaskedValue={true}
      type="tel"
      {...props}
    />
  );
}
