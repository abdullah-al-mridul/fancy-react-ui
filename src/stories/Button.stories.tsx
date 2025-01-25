import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { useState } from "react";
import Button from "../sandbox/Button/Button";
import { ButtonProps } from "../sandbox/Button/types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ButtonProps> = {
  title: "Components Sandbox/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    text: "Default",
  },
};

export const DisableShine: Story = {
  args: {
    text: "Disable Shine",
    disableShine: true,
  },
};

export const DisableBorder: Story = {
  args: {
    text: "Disable Border",
    disableBorder: true,
  },
};

export const DisableShineAndBorder: Story = {
  args: {
    text: "Disable Shine and Border",
    disableShine: true,
    disableBorder: true,
  },
};

export const DefaultLoading: Story = {
  args: {
    text: "Default Loading",
    isLoading: true,
  },
};
export const DefaultClickToLoading: Story = {
  render: (args) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    return (
      <Button
        {...args}
        text="Click to Loading"
        onClick={handleClick}
        isLoading={loading}
      />
    );
  },
};

export const DefaultDisabled: Story = {
  args: {
    text: "Default Disabled",
    disabled: true,
  },
};

export const CustomSize: Story = {
  args: {
    text: "Custom Text Size",
    size: 30,
  },
};

export const Primary: Story = {
  args: {
    text: "Primary",
    variant: "primary",
  },
};

export const PrimaryLoading: Story = {
  args: {
    text: "Primary Loading",
    variant: "primary",
    isLoading: true,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    text: "Primary Disabled",
    variant: "primary",
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary",
    variant: "secondary",
  },
};

export const SecondaryLoading: Story = {
  args: {
    text: "Secondary Loading",
    variant: "secondary",
    isLoading: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    text: "Secondary Disabled",
    variant: "secondary",
    disabled: true,
  },
};

export const Success: Story = {
  args: {
    text: "Success",
    variant: "success",
  },
};

export const SuccessLoading: Story = {
  args: {
    text: "Success Loading",
    variant: "success",
    isLoading: true,
  },
};

export const SuccessDisabled: Story = {
  args: {
    text: "Success Disabled",
    variant: "success",
    disabled: true,
  },
};

export const Warning: Story = {
  args: {
    text: "Warning",
    variant: "warning",
  },
};

export const WarningLoading: Story = {
  args: {
    text: "Warning Loading",
    variant: "warning",
    isLoading: true,
  },
};

export const WarningDisabled: Story = {
  args: {
    text: "Warning Disabled",
    variant: "warning",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    text: "Error",
    variant: "error",
  },
};

export const ErrorLoading: Story = {
  args: {
    text: "Error Loading",
    variant: "error",
    isLoading: true,
  },
};

export const ErrorDisabled: Story = {
  args: {
    text: "Error Disabled",
    variant: "error",
    disabled: true,
  },
};

export const OutlineDefault: Story = {
  args: {
    text: "Outline Default",
    variantType: "outline",
  },
};
export const OutlineDefaultLoading: Story = {
  args: {
    text: "Outline Default Loading",
    variantType: "outline",
    isLoading: true,
  },
};

export const OutlineDefaultDisabled: Story = {
  args: {
    text: "Outline Default Disabled",
    variantType: "outline",
    disabled: true,
  },
};

export const OutlinePrimary: Story = {
  args: {
    text: "Outline Primary",
    variantType: "outline",
    variant: "primary",
  },
};

export const OutlinePrimaryLoading: Story = {
  args: {
    text: "Outline Primary Loading",
    variantType: "outline",
    variant: "primary",
    isLoading: true,
  },
};

export const OutlinePrimaryDisabled: Story = {
  args: {
    text: "Outline Primary Disabled",
    variantType: "outline",
    variant: "primary",
    disabled: true,
  },
};

export const OutlineSecondary: Story = {
  args: {
    text: "Outline Secondary",
    variantType: "outline",
    variant: "secondary",
  },
};

export const OutlineSecondaryLoading: Story = {
  args: {
    text: "Outline Secondary Loading",
    variantType: "outline",
    variant: "secondary",
    isLoading: true,
  },
};

export const OutlineSecondaryDisabled: Story = {
  args: {
    text: "Outline Secondary Disabled",
    variantType: "outline",
    variant: "secondary",
    disabled: true,
  },
};

export const OutlineSuccess: Story = {
  args: {
    text: "Outline Success",
    variantType: "outline",
    variant: "success",
  },
};

export const OutlineSuccessLoading: Story = {
  args: {
    text: "Outline Success Loading",
    variantType: "outline",
    variant: "success",
    isLoading: true,
  },
};

export const OutlineSuccessDisabled: Story = {
  args: {
    text: "Outline Success Disabled",
    variantType: "outline",
    variant: "success",
    disabled: true,
  },
};

export const OutlineWarning: Story = {
  args: {
    text: "Outline Warning",
    variantType: "outline",
    variant: "warning",
  },
};

export const OutlineWarningLoading: Story = {
  args: {
    text: "Outline Warning Loading",
    variantType: "outline",
    variant: "warning",
    isLoading: true,
  },
};

export const OutlineWarningDisabled: Story = {
  args: {
    text: "Outline Warning Disabled",
    variantType: "outline",
    variant: "warning",
    disabled: true,
  },
};

export const OutlineError: Story = {
  args: {
    text: "Outline Error",
    variantType: "outline",
    variant: "error",
  },
};

export const OutlineErrorLoading: Story = {
  args: {
    text: "Outline Error Loading",
    variantType: "outline",
    variant: "error",
    isLoading: true,
  },
};

export const OutlineErrorDisabled: Story = {
  args: {
    text: "Outline Error Disabled",
    variantType: "outline",
    variant: "error",
    disabled: true,
  },
};

export const LinkDefault: Story = {
  args: {
    text: "Link Default",
    variantType: "link",
  },
};

export const LinkDefaultLoading: Story = {
  args: {
    text: "Link Default Loading",
    variantType: "link",
    isLoading: true,
  },
};

export const LinkDefaultDisabled: Story = {
  args: {
    text: "Link Default Disabled",
    variantType: "link",
    disabled: true,
  },
};

export const LinkPrimary: Story = {
  args: {
    text: "Link Primary",
    variantType: "link",
    variant: "primary",
  },
};

export const LinkPrimaryLoading: Story = {
  args: {
    text: "Link Primary Loading",
    variantType: "link",
    variant: "primary",
    isLoading: true,
  },
};

export const LinkPrimaryDisabled: Story = {
  args: {
    text: "Link Primary Disabled",
    variantType: "link",
    variant: "primary",
    disabled: true,
  },
};

export const LinkSecondary: Story = {
  args: {
    text: "Link Secondary",
    variantType: "link",
    variant: "secondary",
  },
};

export const LinkSecondaryLoading: Story = {
  args: {
    text: "Link Secondary Loading",
    variantType: "link",
    variant: "secondary",
    isLoading: true,
  },
};

export const LinkSecondaryDisabled: Story = {
  args: {
    text: "Link Secondary Disabled",
    variantType: "link",
    variant: "secondary",
    disabled: true,
  },
};

export const LinkSuccess: Story = {
  args: {
    text: "Link Success",
    variantType: "link",
    variant: "success",
  },
};

export const LinkSuccessLoading: Story = {
  args: {
    text: "Link Success Loading",
    variantType: "link",
    variant: "success",
    isLoading: true,
  },
};

export const LinkSuccessDisabled: Story = {
  args: {
    text: "Link Success Disabled",
    variantType: "link",
    variant: "success",
    disabled: true,
  },
};

export const LinkWarning: Story = {
  args: {
    text: "Link Warning",
    variantType: "link",
    variant: "warning",
  },
};

export const LinkWarningLoading: Story = {
  args: {
    text: "Link Warning Loading",
    variantType: "link",
    variant: "warning",
    isLoading: true,
  },
};

export const LinkWarningDisabled: Story = {
  args: {
    text: "Link Warning Disabled",
    variantType: "link",
    variant: "warning",
    disabled: true,
  },
};

export const LinkError: Story = {
  args: {
    text: "Link Error",
    variantType: "link",
    variant: "error",
  },
};

export const LinkErrorLoading: Story = {
  args: {
    text: "Link Error Loading",
    variantType: "link",
    variant: "error",
    isLoading: true,
  },
};

export const LinkErrorDisabled: Story = {
  args: {
    text: "Link Error Disabled",
    variantType: "link",
    variant: "error",
    disabled: true,
  },
};
