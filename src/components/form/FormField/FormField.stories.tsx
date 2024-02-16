import React from "react";
import { useForm } from "react-hook-form";
import { Meta, StoryObj } from "@storybook/react";

import FormField from "./FormField";
import InputText from "../InputText/InputText";
import Input from "../Input/Input";

const meta: Meta<typeof FormField> = {
  title: "form/FormField",
  component: FormField,
};

export default meta;

type Story = StoryObj<typeof FormField>;

interface FormData {
  name: string;
  age: number;
  birthday: Date;
}

export const TextField: Story = {
  render: () => {
    const {
      control,
      formState: { errors },
    } = useForm<FormData>({
      mode: "onBlur",
      defaultValues: {
        name: "",
      },
    });

    return (
      <FormField
        name="name"
        label="Name"
        control={control}
        rules={{ required: "Name is required" }}
        error={errors.name}
        render={({ value, onChange, onBlur }) => (
          <Input
            type="text"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
    );
  },
};

export const NumberField: Story = {
  render: () => {
    const {
      control,
      formState: { errors },
    } = useForm<FormData>({
      mode: "onBlur",
      defaultValues: {
        age: 0,
      },
    });

    return (
      <FormField
        name="age"
        label="Age"
        control={control}
        rules={{ required: "Age is required" }}
        error={errors.age}
        render={({ value, onChange, onBlur }) => (
          <Input
            type="number"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
    );
  },
};

export const DateField: Story = {
  render: () => {
    const {
      control,
      formState: { errors },
    } = useForm<FormData>({
      mode: "onBlur",
      defaultValues: {
        birthday: new Date(),
      },
    });

    return (
      <FormField
        name="birthday"
        label="Birthday"
        control={control}
        rules={{ required: "Birthday is required" }}
        error={errors.birthday}
        render={({ value, onChange, onBlur }) => (
          <Input
            type="date"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
    );
  },
};
