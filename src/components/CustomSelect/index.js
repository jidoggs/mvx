import React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ArrowDown2 } from "iconsax-react";

export const Select = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      // eslint-disable-next-line
      <SelectPrimitive.Root
        defaultValue={props.default}
        value={props.value}
        name={props.name}
        onValueChange={props.onChange}
      >
        <SelectPrimitive.Trigger
          disabled={props.disabled}
          id={props.id}
          className={props.className}
          ref={forwardedRef}
        >
          <SelectPrimitive.Value aria-label={props.value}>
            {props.value}
          </SelectPrimitive.Value>

          <ArrowDown2 size="16" color="#6C6C6C" variant="Bold" />
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Content className="bg-white border rounded border-solid border-gray-100 mt-10">
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Root>
    );
  }
);
export const SelectItem = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      // eslint-disable-next-line
      <SelectPrimitive.Item
        className="bg-gray-white py-2.5 px-4  border-b text-gray-60 hover:bg-dropdownselected outline-none cursor-pointer border-solid border-gray-100"
        value={props.value}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);

background:;
