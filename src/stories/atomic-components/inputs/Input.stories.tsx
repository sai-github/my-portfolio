import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    value: {
      control: "text",
    },
    defaultValue: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    disabled: { control: "boolean" },
    hintType: {
      options: ["info", "success", "danger"],
      control: { type: "select" },
    },
    hint: {
      control: "text",
    },
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutLabel: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
  },
};

export const WithLabelAndValue: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    value: "Value",
  },
};

export const InputWithRequired: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    value: "Value",
    required: true,
  },
};

export const InfoInputWithHint: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    hintType: "info",
    hint: "Info hint",
  },
};

export const SuccessInputWithHint: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    hintType: "success",
    hint: "Success hint",
  },
};

export const DangerInputWithHint: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    hintType: "danger",
    hint: "Danger hint",
  },
};

export const DisabledInput: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    disabled: true,
  },
};
