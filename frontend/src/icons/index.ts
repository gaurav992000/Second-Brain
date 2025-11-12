export interface IconProps{
    size:"sm"|"md"|"lg"
}

export const iconSizeVriants={
    "sm":"size-2",
    "md":"size-4",
    "lg":"size-6"
}

export interface click{
    onclick?:()=>void;
}