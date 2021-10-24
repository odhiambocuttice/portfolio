import "./testimonials.scss";

import { TestimonialsData } from "../../projectData.js";

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        {TestimonialsData.map((data) => (
          <div className="testimony-card">
            <div className="top">
              <img src={data.img} alt={data.name} />
            </div>
            <div className="center">
              <p>{data.desc}</p>
            </div>
            <div className="bottom">
              <h3>{data.name}</h3>
              <h4>{data.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
