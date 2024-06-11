"use client";
import { FormEventHandler, ReactNode } from "react";
import { getFormData } from "../formLibrary/formHelper";

interface FormProps {
  onSubmit?: (data: any) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  method?: string;
  action?: string;
  fRef?: any;
}

export function Form(props: FormProps) {
  const submitFunc: FormEventHandler = (ev) => {
    if (props.onSubmit === undefined) return;
    ev.preventDefault();
    const frm = ev.target as HTMLFormElement;
    if (!frm) return;
    if (frm.checkValidity() === false) return;
    const data = getFormData(ev.target);
    props.onSubmit(data);
    frm.reset();
  };
  return (
    <form
      onSubmit={submitFunc}
      className={props.className}
      style={{
        ...props.style,
        maxWidth: "400px",
        margin: "20px auto",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px #ccc",
      }}
      method={props.method}
      action={props.action}
      ref={props.fRef}
    >
      {props.children}
    </form>
  );
}
