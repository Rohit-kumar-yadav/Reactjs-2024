import { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleOnChangeForm(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          name="name"
          id="name"
          placeholder="Enter you name"
          onChange={handleOnChangeForm}
        />

        <input
          value={formData.email}
          type="email"
          name="email"
          id="name"
          placeholder="Enter you name"
          onChange={handleOnChangeForm}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormComponent;
