import React, { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, HTMLAttributes } from "react";
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    className?: string;
}
export declare const Form: React.FC<FormProps> & {
    Group: React.FC<FormGroupProps>;
    Label: React.FC<FormLabelProps>;
    Input: React.FC<FormInputProps>;
    TextArea: React.FC<FormTextAreaProps>;
    Select: React.FC<FormSelectProps>;
    Control: React.FC<FormControlProps>;
};
interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
}
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
interface FormTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}
interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
}
type ControlPropsBase = {
    as?: "input" | "textarea" | "select";
    className?: string;
};
type FormControlProps = (ControlPropsBase & InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
}) | (ControlPropsBase & TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
}) | (ControlPropsBase & SelectHTMLAttributes<HTMLSelectElement> & {
    as: "select";
});
export default Form;
