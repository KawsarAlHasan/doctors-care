import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";

function AvailableAppointments({ selectedDate }) {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch("AppointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <section className="my-12">
      <p className="text-center font-bold text-primary">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOption
            key={appointmentOption}
            appointmentOption={appointmentOption}
          ></AppointmentOption>
        ))}
      </div>
    </section>
  );
}

export default AvailableAppointments;
