/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DetailsvsExamplesProps } from "./DetailsvsExamples";
import { ChatsProps } from "./Chats";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExamplePageOverridesProps = {
    ExamplePage?: PrimitiveOverrideProps<FlexProps>;
    "Details vs. Examples"?: DetailsvsExamplesProps;
    "vertical scroll frame"?: PrimitiveOverrideProps<ViewProps>;
    Chats?: ChatsProps;
} & EscapeHatchProps;
export declare type ExamplePageProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Examples Selected";
} & {
    overrides?: ExamplePageOverridesProps | undefined | null;
}>;
export default function ExamplePage(props: ExamplePageProps): React.ReactElement;
