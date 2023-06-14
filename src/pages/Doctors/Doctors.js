import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

function Doctors() {
  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("https://doctors-care.onrender.com/doctors");
      const data = await res.json();
      return data;
    },
  });

  console.log(doctors, "doctors");

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-center text-4xl">
        Doctors <span className="text-red-600">Details</span>
      </h2>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={doctor.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: {doctor.name}</h2>
              <h2 className="text-xl">Specialty: {doctor.specialty}</h2>
              <h2 className="text-xl">Email: {doctor.email}</h2>
              <p>Description: {doctor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
