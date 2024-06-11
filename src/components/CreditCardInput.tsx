import { Input } from "./ValidatorInput";

function luhnCheck(numWithSpaces: string) {
  const ccNum = numWithSpaces.replaceAll(" ", "");
  const arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  let bit = 1;
  let len = ccNum.length;
  let sum = 0;
  let val;

  while (len) {
    val = parseInt(ccNum.charAt(--len), 10);
    // eslint-disable-next-line no-cond-assign
    sum += (bit ^= 1) ? arr[val] : val;
  }

  return sum && sum % 10 === 0;
}

export function CreditCardInput(props: any) {
  return (
    <Input
      mask=".... .... .... ...."
      maskSlots="."
      dataAccept={/\d/}
      exactLength={16}
      validateUnMaskedValue={true}
      customValidator={luhnCheck}
      unmaskInputValueProp={true}
      customErrorMessages={{
        customNotValid: "Invalid credit card number... Try 4111 1111 1111 1111",
      }}
      {...props}
    />
  );
}
