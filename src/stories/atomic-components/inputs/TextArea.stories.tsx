import type { Meta, StoryObj } from "@storybook/react";

import TextArea from "./TextArea";

const meta = {
  title: "Atoms/TextArea",
  component: TextArea,
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
    required: { control: "boolean" },
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
    required: false,
  },
} satisfies Meta<typeof TextArea>;

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

export const TextAreaWithRequired: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    value: "Value",
    required: true,
  },
};

export const InfoTextAreaWithHint: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    hintType: "info",
    hint: "Info hint",
  },
};

export const SuccessTextAreaWithHint: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    hintType: "success",
    hint: "Success hint",
  },
};

export const DangerTextAreaWithHint: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    hintType: "danger",
    hint: "Danger hint",
  },
};

export const DisabledTextArea: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    disabled: true,
  },
};
