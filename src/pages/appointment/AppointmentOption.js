import React from "react";

function AppointmentOption({ appointmentOption, setTreatment }) {
  const { name, slots, price } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="font-bold text-2xl text-secondary">{name}</h2>
        <p> {slots.length > 0 ? slots[0] : "Try Another Day"} </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"}
          available{" "}
        </p>
        <p>Price: {price}</p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            for="my-modal-6"
            className="btn modal-button btn-sm md:btn-md lg:btn-wide btn-primary"
            onClick={() => setTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
}

export default AppointmentOption;
