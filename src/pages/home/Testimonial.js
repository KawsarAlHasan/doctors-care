import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

function Testimonial() {
  const reviews = [
    {
      _id: 1,
      name: "Shakib Al Hasan",
      img: people1,
      review:
        "The services that I receive from (DN) is excellent. Dr. (Name) and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.",
      location: "Magura Bangladesh",
    },
    {
      _id: 1,
      name: "Rashid Khan",
      img: people2,
      review:
        " Wonderful experience with (Clinic name). Dr. (Name) was a wonderful surgeon, and the staff was always helpful and kind. They ensured I had a smooth prep, surgery, and follow-up. I am so glad I chose (Clinic name) and would highly recommend to anyone.",
      location: "Afganistan ",
    },
    {
      _id: 2,
      name: "Virat Kohli",
      img: people3,
      review:
        "Dr. (Name) did a great job with my first ever health exam. She explained everything to me in a very clear manner. She was also kind and friendly. All of the staff was great – they were helpful, patient and helped with my insurance.",
      location: "Delhi India",
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img src={quote} className="w-24 lg:w-48" alt="no internet" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
