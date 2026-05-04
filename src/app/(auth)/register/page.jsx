"use client";
import { authClient } from "@/app/lib/auth.client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.photoUrl,
      callbackURL: "/",
    });
    if (error) {
      toast(error.message);
    } else {
      router.push("/");
    }
  };
  return (
    <main>
      <div className="container mx-auto flex justify-center items-center min-h-160">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="fieldset bg-[#38bff817] border-base-300 rounded-box w-xs border p-4"
        >
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
              className="input validator"
              placeholder="Your Name"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
            <p className="validator-hint hidden">Required</p>
          </fieldset>
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
          <fieldset className="fieldset">
            <label className="label">Photo-url</label>
            <input
              type="text"
              {...register("photoUrl", {
                required: "Photo-url is required",
                message: "Give a valid photo-url",
              })}
              className="input validator"
              placeholder="Your Photo-url"
              required
            />

            {errors.photoUrl && (
              <p className="text-red-500 text-sm">{errors.photoUrl.message}</p>
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
            Register
          </button>
          <p className="text-sm text-center pt-2">
            Already have an account?{" "}
            <Link
              className="text-red-500 underline hover:no-underline"
              href={"/login"}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
