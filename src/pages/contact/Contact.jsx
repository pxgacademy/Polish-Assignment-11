import { Helmet } from "react-helmet";
import Container from "../../components/container/Container";
import SectionHeader from "../../components/container/SectionHeader";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Message sent successfully",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
      position: "center",
    });
    event.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact | Track & Retrieve</title>
      </Helmet>
      <Container>
        <SectionHeader>Contact Us</SectionHeader>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-10 mt-10">
          <form
            onSubmit={handleSubmit}
            id="contact_form"
            className="flex flex-col space-y-2 p-5 lg:p-10 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-xl"
          >
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your Name" required />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Your Email" required />
            <label htmlFor="">Subject</label>
            <input type="text" placeholder="Subject" required />
            <label htmlFor="">Message</label>
            <textarea
              placeholder="Your Message"
              className="min-h-20 max-h-52"
              required
            />
            <label className="flex justify-center">
              <button type="submit" className="btn btn-wide">
                Submit
              </button>
            </label>
          </form>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Let’s Help You Reunite with Your Lost Belongings
            </h3>
            <p>
              Have questions, feedback, or need assistance with Track &
              Retrieve? We’re here to help! Our team is dedicated to making the
              process of reporting and recovering lost or found items as
              seamless as possible. Whether you’re an individual looking to
              reconnect with a cherished item or an organization seeking to
              streamline lost-and-found management, we’re just a message away.
              Reach out to us today and let’s work together to make reunions
              happen!
            </p>

            <div className="mt-10">
              <div className="flex items-center gap-x-2">
                <FaPhoneAlt />
                <span>01356 546 568</span>
              </div>
              <div className="flex items-center gap-x-2">
                <FaEnvelope />
                <a href="mailto:info@trackandretrieve.com">
                  info@trackandretrieve.com
                </a>
              </div>
            </div>

            <div>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
