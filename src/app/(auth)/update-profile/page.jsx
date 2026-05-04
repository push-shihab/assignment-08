"use client";
import { authClient } from "@/app/lib/auth.client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { error } = await authClient.updateUser({
      image: data.photoUrl,
      name: data.name,
    });
    if (error) {
      toast.error("Updating profile failed!");
    } else {
      toast.success("Profile updated successfully");
    }
  };
  return (
    <main>
      <div className="container mx-auto flex justify-center items-center min-h-160">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="fieldset bg-[#38bff817] border-base-300 rounded-box w-xs border p-4"
        >
          <h2 className="text-2xl font-bold text-center">Update Profile</h2>
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

          <button className="btn btn-neutral mt-4" type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </main>
  );
};

export default UpdateProfile;
