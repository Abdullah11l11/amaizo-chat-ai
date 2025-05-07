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

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setLoading(true);
      const username = values.email.split("@")[0];
      setTimeout(() => {
        console.log("Logged in:", values);
        setLoading(false);
        setSubmitting(false);
        navigate("/home");
        toast.success(
          `Welcome ${username.charAt(0).toUpperCase() + username.slice(1)}`
        );
      }, 1500);
    },
  });

  const inputs = [
    {
      name: "email",
      type: "email",
      touched: formik.touched.email,
      errors: formik.errors.email,
      value: formik.values.email,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
    {
      name: "password",
      type: "password",
      touched: formik.touched.password,
      errors: formik.errors.password,
      value: formik.values.password,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
  ];

  return (
    <div className="flex-center flex-col gap-1.5 min-h-screen">
      <motion.div
        variants={scaleVariants}
        initial={"hidden"}
        animate={"visible"}
      >
        <GradientCard className="w-fit p-0.5 rounded-3xl">
          <div className="bg-charcoal/95 rounded-3xl py-3 md:py-9 px-4 md:px-12 flex flex-col flex-center">
            <Logo />
            <div className="text-white mb-4 text-center">
              <h3 className="font-medium text-3.5xl">Log in</h3>
              <p className="text-base">Welcome back to AMAIZO</p>
            </div>
            <LoginOptions />
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-1.5 w-full"
            >
              {inputs.map(
                ({ name, type, touched, errors, value, onChange, onBlur }) => (
                  <Input
                    key={name}
                    id={name}
                    name={name}
                    type={type}
                    placeholder={name}
                    aria-label={name}
                    touched={touched}
                    errors={errors}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )
              )}
              <Link
                to="/login"
                className="text-white/50 text-center mb-7.5 mt-1"
              >
                Forgot password?
              </Link>

              <MainButton
                type="submit"
                className="mt-4 mb-1.5"
                disabled={formik.isSubmitting || loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </MainButton>
            </form>
          </div>
        </GradientCard>

        <p className="text-center text-white">
          Don’t have an account?{" "}
          <Link className="underline" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
