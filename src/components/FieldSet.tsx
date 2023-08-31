import React from "react";

type kinds = {};

type FieldProps = {
  label: string;
  input?: any;
  attr?: string;
  formMode?: string;
  fieldType?: "optional" | "required" | "readonly" | "dropdown";
  value?: string;
  options?: string[];
};

const FieldSet = ({
  label,
  input,
  attr,
  formMode = "read",
  fieldType = "optional",
  options = [],
  value,
}: FieldProps) => {
  const fieldStyler = (type: string) => {
    const baseStyle = "m-2 w-full rounded border-2 p-1 ";
    let finalStyle;
    switch (type) {
      case "readonly":
        finalStyle =
          baseStyle + "border-slate-300   bg-slate-200 text-slate-400";
        break;
      case "required":
        finalStyle = baseStyle + "border-red-600  bg-red-300 ";
        break;
      case "optional":
        finalStyle = baseStyle + "border-green-600  bg-green-300 ";
        break;
    }
    return finalStyle;
  };

  const createReadInput = (_paramObj) => {
    if (_paramObj?.i) {
      return (
        <input
          disabled
          {..._paramObj?.i}
          // Use input props if available, else default to an empty object
          className={`m-2 w-full rounded border-2 border-slate-300 p-1 `}
        />
      );
    } else {
      return (
        <input
          disabled
          value={_paramObj?.v}
          // Use input props if available, else default to an empty object
          className={`m-2 w-full rounded border-2 border-slate-300 p-1 `}
        />
      );
    }
  };

  const createEditInput = (_fieldType: string, _input: any) => {
    debugger;
    return (
      <input
        {...(_fieldType === "readonly" ? { readOnly: true } : {})}
        // data-field-name={_attr}
        {..._input}
        className={fieldStyler(_fieldType)}
      />
    );
  };

  const createEditDropdown = (_fieldType: string, _option: [], _input: any) => {
    return (
      <div className="">
        <select
          {..._input}
          className="m-2 w-full rounded border-2 border-green-600  bg-green-300  p-1 "
        >
          {_option.map((opt, i) => {
            return (
              <option key={`${opt}-${1}`} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
  let isReadMode = Boolean(formMode === "read" || formMode === undefined);
  let isEditMode = Boolean(formMode === "edit" || formMode === "add");

  const readInputProps = input ? { i: input } : { v: value };
  return (
    // <div className="col-span-2">
    <div className="flex items-center">
      <label className="block px-2 w-32 text-left">{label}</label>
      {isReadMode
        ? createReadInput(readInputProps)
        : isEditMode && fieldType === "dropdown"
        ? createEditDropdown(fieldType, options, input)
        : isEditMode
        ? createEditInput(fieldType, input)
        : null}
    </div>
  );
};

export default FieldSet;
