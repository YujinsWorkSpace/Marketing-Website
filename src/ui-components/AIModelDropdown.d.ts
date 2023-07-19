/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AIModelDropdownOverridesProps = {
    AIModelDropdown?: PrimitiveOverrideProps<FlexProps>;
    "Chat GPT"?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type AIModelDropdownProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: AIModelDropdownOverridesProps | undefined | null;
}>;
export default function AIModelDropdown(props: AIModelDropdownProps): React.ReactElement;
