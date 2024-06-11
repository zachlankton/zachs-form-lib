import { Input } from "./components/ValidatorInput";
import { Form } from "./components/Form";
import { useRef, useState } from "react";
import { Display } from "./components/Display";
import { Btn } from "./components/Button";
import { setFormData } from "./formLibrary/formHelper";
import { TelephoneInput } from "./components/TelephoneInput";
import { CreditCardInput } from "./components/CreditCardInput";

const testValue = {
  name: "Name Test Value",
  email: "name.test@value.com",
  age: 50,
  "phone-with-mask": "(999) 888-7777",
  "phone-un-masked": "1231231231",
  "credit-card": "4111 1111 1111 1111",
  a: {
    complex: [
      null,
      {
        name: {
          path: "cool",
        },
      },
    ],
  },
};

function App() {
  const formRef = useRef(null);
  const [data, setData] = useState<any>({});
  return (
    <>
      <Form onSubmit={(data) => setData(data)} fRef={formRef}>
        <Input name="name" label="Name" required minLength={5} />
        <Input name="email" label="Email" required type="email" />
        <Input
          name="age"
          label="Age"
          required
          type="number"
          validateOnInput={false}
          customValidator={(val) =>
            +val >= 20 && +val <= 50 ? true : "Must be between 20 and 50"
          }
        />

        <TelephoneInput
          name="phone-with-mask"
          label="Phone (value includeds mask)"
          required
        />
        <TelephoneInput
          name="phone-un-masked"
          label="Phone (value unmasked)"
          unmaskInputValueProp={true}
          required
        />

        <CreditCardInput name="credit-card" label="Credit Card" required />

        <Input
          name="a.complex[1].name[path]"
          label="A Complex Name Path Example"
          required
        />

        <Btn type="submit">Submit</Btn>
        <Btn type="reset">Reset</Btn>
        <Btn
          type="button"
          onClick={() => setFormData(formRef.current, testValue)}
        >
          Set Test Data
        </Btn>
      </Form>

      <Display data={data} />
    </>
  );
}

export default App;
