/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function TechnologySmall(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector: {},
        "ph:code-fill": {},
        Technology: {},
        TechnologySmall: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="6px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(148,66,255,1)"
      borderRadius="7px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(148,66,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "TechnologySmall")}
      {...rest}
    >
      <View
        width="16px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ph:code-fill")}
      >
        <Icon
          width="13px"
          height="11px"
          viewBox={{ minX: 0, minY: 0, width: 13, height: 11 }}
          paths={[
            {
              d: "M12 0L1 0C0.734784 4.44089e-16 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 2.22045e-16 0.734784 0 1L0 10C2.22045e-16 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11L12 11C12.2652 11 12.5196 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10L13 1C13 0.734784 12.8946 0.48043 12.7071 0.292893C12.5196 0.105357 12.2652 8.88178e-16 12 0ZM4.3 6.6C4.40609 6.67957 4.47622 6.79801 4.49497 6.92929C4.51373 7.06056 4.47957 7.19391 4.4 7.3C4.32044 7.40609 4.20199 7.47622 4.07071 7.49498C3.93944 7.51373 3.80609 7.47956 3.7 7.4L1.7 5.9C1.6379 5.85343 1.5875 5.79303 1.55279 5.72361C1.51807 5.65418 1.5 5.57762 1.5 5.5C1.5 5.42238 1.51807 5.34582 1.55279 5.27639C1.5875 5.20697 1.6379 5.14657 1.7 5.1L3.7 3.6C3.80609 3.52043 3.93944 3.48627 4.07071 3.50503C4.20199 3.52378 4.32044 3.59391 4.4 3.7C4.47957 3.80609 4.51373 3.93944 4.49497 4.07071C4.47622 4.20199 4.40609 4.32044 4.3 4.4L2.83313 5.5L4.3 6.6ZM7.98063 2.1375L5.98063 9.1375C5.96358 9.20175 5.93389 9.26196 5.8933 9.3146C5.85271 9.36724 5.80203 9.41126 5.74423 9.44409C5.68642 9.47691 5.62265 9.49788 5.55665 9.50576C5.49064 9.51364 5.42373 9.50829 5.35982 9.49C5.29591 9.47172 5.23628 9.44088 5.18444 9.39928C5.13259 9.35768 5.08956 9.30615 5.05786 9.24773C5.02616 9.1893 5.00643 9.12513 4.99982 9.05899C4.99321 8.99284 4.99986 8.92605 5.01937 8.8625L7.01937 1.8625C7.05781 1.73733 7.14382 1.63224 7.25891 1.5698C7.37399 1.50736 7.50898 1.49256 7.63487 1.52857C7.76075 1.56459 7.86749 1.64855 7.93214 1.76241C7.99679 1.87627 8.0142 2.01094 7.98063 2.1375ZM11.3 5.9L9.3 7.4C9.19391 7.47956 9.06056 7.51373 8.92929 7.49498C8.79801 7.47622 8.67957 7.40609 8.6 7.3C8.52044 7.19391 8.48627 7.06056 8.50502 6.92929C8.52378 6.79801 8.59391 6.67957 8.7 6.6L10.1669 5.5L8.7 4.4C8.64747 4.3606 8.60322 4.31125 8.56976 4.25475C8.53631 4.19825 8.51431 4.13571 8.50502 4.07071C8.49574 4.00571 8.49935 3.93952 8.51564 3.87591C8.53194 3.8123 8.5606 3.75253 8.6 3.7C8.6394 3.64747 8.68875 3.60322 8.74525 3.56976C8.80175 3.53631 8.86429 3.51431 8.92929 3.50503C8.99429 3.49574 9.06048 3.49935 9.12409 3.51564C9.1877 3.53194 9.24747 3.5606 9.3 3.6L11.3 5.1C11.3621 5.14657 11.4125 5.20697 11.4472 5.27639C11.4819 5.34582 11.5 5.42238 11.5 5.5C11.5 5.57762 11.4819 5.65418 11.4472 5.72361C11.4125 5.79303 11.3621 5.85343 11.3 5.9Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="15.63%"
          bottom="15.63%"
          left="9.38%"
          right="9.38%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="14.0625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Technology"
        {...getOverrideProps(overrides, "Technology")}
      ></Text>
    </Flex>
  );
}
