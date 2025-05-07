import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 max-w-md mx-auto mt-10"
    >
      <div>
        <label className="block font-medium">Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="border px-3 py-2 w-full"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-600 text-sm">{formik.errors.name}</div>
        )}
      </div>

      <div>
        <label className="block font-medium">Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="border px-3 py-2 w-full"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-600 text-sm">{formik.errors.email}</div>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default FormikForm;
