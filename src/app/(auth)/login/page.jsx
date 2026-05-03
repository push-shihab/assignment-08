"use client";
import { authClient } from "@/app/lib/auth.client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast(error.message);
    }
  };
  return (
    <main>
      <div className="container mx-auto flex justify-center items-center min-h-160">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="fieldset bg-[#38bff817] border-base-300 rounded-box w-xs border p-4"
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                message: "Give a valid Email",
              })}
              className="input validator"
              placeholder="Email"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <p className="validator-hint hidden">Required</p>
          </fieldset>
          <label className="fieldset">
            <span className="label">Password</span>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
              className="input validator"
              placeholder="Password"
              required
            />

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <span className="validator-hint hidden">Required</span>
          </label>

          <button className="btn btn-neutral mt-4" type="submit">
            Login
          </button>
          <button className="btn btn-ghost mt-1" type="submit">
            Login With Google
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
