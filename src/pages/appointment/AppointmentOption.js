import React, { useState } from "react";

function AppointmentOption({ appointmentOption }) {
  const { name, slots } = appointmentOption;
  const [treatment, setTreatment] = useState(null);
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="font-bold text-2xl text-secondary">{name}</h2>
        <p> {slots.length > 0 ? slots[0] : "Try Another Day"} </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"}
          available{" "}
        </p>
        <div className="card-actions justify-center">
          {/* modal start */}
          <label
            onClick={() => setTreatment(appointmentOption)}
            for="book-appointment"
            className="btn modal-button btn-sm md:btn-md lg:btn-wide btn-primary"
          >
            Book Appointment
          </label>

          {treatment && (
            <>
              <input
                type="checkbox"
                id="book-appointment"
                class="modal-toggle"
              />
              <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box relative">
                  <label
                    for="book-appointment"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="font-bold text-lg text-center">
                    {treatment.name}
                  </h3>
                </div>
              </div>
            </>
          )}
          {/* modal end */}
        </div>
      </div>
    </div>
  );
}

export default AppointmentOption;
