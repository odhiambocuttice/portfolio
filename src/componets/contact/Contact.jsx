import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./contact.scss";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Mail sent! Thank You:)", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        "service_eecxkro",
        "template_7kec0zg",
        templateParams,
        "user_zc0r7H2t7iUZnigbSC0Mb"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="contact">
      <div className="left"></div>
      <div className="right">
        <p>What's your project? Send me an email.</p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Row 1 of form */}
          <div className="name-email">
            <div className="name-input">
              <input
                autoComplete="off"
                type="text"
                name="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                placeholder="Name"
              ></input>
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
            </div>
            <div className="email-input">
              <input
                autoComplete="off"
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                placeholder="Email address"
              ></input>
              {errors.email && (
                <span className="errorMessage">
                  Please enter a valid email address
                </span>
              )}
            </div>
          </div>
          {/* Row 2 of form */}
          <div className="">
            <input
              autoComplete="off"
              type="text"
              name="subject"
              {...register("subject", {
                required: {
                  value: true,
                  message: "Please enter a subject",
                },
                maxLength: {
                  value: 75,
                  message: "Subject cannot exceed 75 characters",
                },
              })}
              placeholder="Subject"
            ></input>
            {errors.subject && (
              <span className="errorMessage">{errors.subject.message}</span>
            )}
          </div>

          {/* Row 3 of form */}
          <div className="">
            <textarea
              rows={3}
              name="message"
              {...register("message", {
                required: true,
              })}
              className="form-control formInput"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <span className="errorMessage">Please enter a message</span>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
