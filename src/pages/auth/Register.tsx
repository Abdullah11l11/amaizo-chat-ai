import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GradientCard from "@/components/UI/GradientCard";
import LoginOptions from "@/components/login-options/LoginOptions";
import MainButton from "@/components/UI/MainButton";
import Input from "@/components/UI/Input";
import Logo from "@/components/UI/Logo";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import { scaleVariants } from "@/utils/opacityAnimate";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .required("Username is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        console.log("Registered:", values);
        setLoading(false);
        setSubmitting(false);
        navigate("/login");
        toast.success("Now you can log in!");
      }, 1500);
    },
  });

  const inputs = [
    {
      type: "text",
      name: "username",
      touched: formik.touched.username,
      errors: formik.errors.username,
      value: formik.values.username,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
    {
      name: "email",
      touched: formik.touched.email,
      errors: formik.errors.email,
      value: formik.values.email,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
    {
      name: "password",
      touched: formik.touched.password,
      errors: formik.errors.password,
      value: formik.values.password,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
    {
      type: "password",
      placeholder: "confirm password",
      name: "confirmPassword",
      touched: formik.touched.confirmPassword,
      errors: formik.errors.confirmPassword,
      value: formik.values.confirmPassword,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
  ];

  return (
    <div className="flex-center flex-col gap-1.5 min-h-screen">
      <div className="my-5">
        <motion.div
          variants={scaleVariants}
          initial={"hidden"}
          animate={"visible"}
        >
          <GradientCard className="w-fit p-0.5 rounded-3xl">
            <div className="bg-charcoal/95 rounded-3xl py-3 md:py-9 px-4 md:px-12 flex flex-col flex-center">
              <Logo />
              <div className="text-white mb-4 text-center">
                <h3 className="font-medium text-3.5xl">Sign Up</h3>
                <p className="text-base">Create your free account</p>
              </div>
              <LoginOptions />
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-1.5 w-full"
              >
                {inputs.map(
                  ({
                    placeholder,
                    type,
                    name,
                    touched,
                    errors,
                    value,
                    onChange,
                    onBlur,
                  }) => (
                    <Input
                      key={name}
                      id={name}
                      name={name}
                      type={type || name}
                      placeholder={placeholder || name}
                      aria-label={name}
                      touched={touched}
                      errors={errors}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )
                )}

                <MainButton
                  type="submit"
                  className="mt-4 mb-1.5"
                  disabled={formik.isSubmitting || loading}
                >
                  {loading ? "Creating..." : "Create your free account"}
                </MainButton>
                <p className="text-sm text-center text-white/50">
                  By signing up you agree to our <br />
                  <span className="text-white/40 underline cursor-pointer">
                    Terms of Service
                  </span>
                  .
                </p>
              </form>
            </div>
          </GradientCard>
          <p className="text-center text-white">
            Already have an account?{" "}
            <Link className="underline" to={"/login"}>
              Log In
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
