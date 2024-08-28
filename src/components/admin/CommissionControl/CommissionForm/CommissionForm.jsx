import React from "react";
import { useForm } from "react-hook-form";
import { Form, Select, ErrorMessage, Button } from "./CommissionForm.style";

const CommissionForm = ({
  onSubmit,
  selectedOption,
  setSelectedOption,
  options,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    reset();
  };

  const onSubmitForm = (data) => {
    onSubmit(data.type, parseFloat(data.rate));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <Select
          {...register("type", { required: "Type is required" })}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="occupation">Occupation</option>
          <option value="product">Product</option>
          <option value="user">User</option>
        </Select>
        {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}
      </div>

      <div>
        <Select {...register("option", { required: "Option is required" })}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        {errors.option && <ErrorMessage>{errors.option.message}</ErrorMessage>}
      </div>

      <Button type="submit">Set Rate</Button>
    </Form>
  );
};

export default CommissionForm;
