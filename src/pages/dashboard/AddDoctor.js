import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddDoctor() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-care.onrender.com/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleAddDoctor = async (data) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("file", image);

    formData.append("upload_preset", "v3hakopx");
    const url = "https://api.cloudinary.com/v1_1/daizkkv04/image/upload";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.asset_id) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            description: data.description,
            image: imgData.secure_url,
          };

          // save doctor
          fetch("https://doctors-care.onrender.com/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  return (
    <div className="w-96 p-7">
      <h2>Add a Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-primary w-full max-w-xs"
          >
            {specialties?.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="description"
            {...register("description", {
              required: "description is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.description && (
            <p className="text-red-600">{errors.description?.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Email is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-600">{errors.img?.message}</p>}
        </div>
        <input
          className="btn btn-secondary w-full mt-3"
          type="submit"
          value="Add Doctor"
        />
        {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
      </form>
    </div>
  );
}

export default AddDoctor;
