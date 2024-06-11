"use client";
import { setupValidatorInput } from "../formLibrary/validator";
import type { ValidatorOptions } from "../formLibrary/validator";
import { useEffect, useRef } from "react";

export interface ValidatorInputProps
  extends Omit<ValidatorOptions, "inputElm"> {
  name: string;
  label?: string;
  labelClass?: string;
  labelStyle?: React.CSSProperties;
  errorClass?: string;
  errorStyle?: React.CSSProperties;
  placeholder?: string;
  type?: string;
  value?: any;
  readonly?: boolean;
  className?: string;
  style?: React.CSSProperties;
  labelProps?: any;
  inputProps?: any;
  errorProps?: any;
}

export function Input(props: ValidatorInputProps) {
  const inputRef: any = useRef(null);
  const errorRef: any = useRef(null);
  const setupValidator = () => {
    if (!inputRef.current || !errorRef.current) return;
    if (inputRef.current.validatorOptions || errorRef.current.validatorOptions)
      return;
    inputRef.current.readOnly = props.readonly || false;
    setupValidatorInput({
      inputElm: inputRef.current,
      errorElm: errorRef.current,
      ...props,
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(setupValidator, []);

  return (
    <>
      {props.label && (
        <label
          htmlFor={props.name}
          className={props.labelClass}
          style={{ ...props.labelStyle, display: "block", marginTop: 10 }}
          {...props.labelProps}
        >
          {props.label}
        </label>
      )}
      <input
        defaultValue={props.value || ""}
        ref={inputRef}
        name={props.name}
        id={props.name}
        className={props.className}
        style={{
          ...props.style,
          display: "block",
          width: "100%",
          padding: 10,
          boxSizing: "border-box",
          borderRadius: 5,
          border: "1px solid #ccc",
        }}
        placeholder={props.placeholder || ""}
        type={props.type || "text"}
        {...props.inputProps}
      />
      <div
        ref={errorRef}
        style={{
          height: 0,
          overflow: "hidden",
          color: "red",
          transition: "all",
          transitionDuration: "300ms",
          ...props.errorStyle,
        }}
        className={props.errorClass}
        {...props.errorProps}
      />
    </>
  );
}
