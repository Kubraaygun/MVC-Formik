const InputField = ({ formik,data }) => {
    const {label,name,type}=data
  return (
    <div className={formik.touched.email && formik.errors.email && "error"}>
      <label>{label}</label>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={name}
        className="form-control mt-2"
        type={type}
      />
      <span>{formik.errors?.email}.</span>
    </div>
  );
};

export default InputField;
