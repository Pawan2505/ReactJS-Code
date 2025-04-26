import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();

  function handleForm(data) {
     setData(data);
  }

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <input {...register("firstName")} placeholder="First Name" />

      <select {...register("category", { required: true })}>
        <option value="">--Select Category--</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>

      <textarea {...register("aboutYou")} placeholder="About You" />

      {/* Showing submitted data */}
      <p>{data && JSON.stringify(data)}</p>

      <input type="submit" />
    </form>
  );
};

export default FormHook;
