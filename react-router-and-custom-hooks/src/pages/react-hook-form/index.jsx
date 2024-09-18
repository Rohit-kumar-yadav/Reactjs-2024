import React from "react";
import { useForm } from "react-hook-form";

function ReaCtHookFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function onSubmitForm(formData) {
    console.log(formData);
    reset()
  }
  return (
    <div>
      <h1>ReactHookFormExample</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            name="email"
          />
          {errors.email && errors.email.type === "required" ? (
            <p style={{ color: "red" }}>Email is required</p>
          ) : null}
        </div>
        <div>
          <label>Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            type="password"
            name="password"
          />
        </div>
        {errors.password && errors.password.type === "minLength" ? (
          <p style={{ color: "red" }}>Password must be at least 6 characters</p>
        ) : null}
        {errors.password && errors.password.type === "required" ? (
          <p style={{ color: "red" }}>Password is required</p>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReaCtHookFormExample;
