import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: "", name: "", message: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({ ...formData, [name]: value });
  };

  const submitPost = async (formData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.log(`We couldn't send the data`);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    submitPost(formData);
  };

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-center mb-8 text-4xl text-primary-pink">How can i help you ??</h2>
        <form className="max-w-3xl mx-auto shadow-xl  p-6" onSubmit={handleForm}>
          {/* Name & Email */}
          <div className="flex items-center gap-x-4 mb-4">
            <div className="flex flex-col flex-1">
              <label className="mb-1" htmlFor="email">
                Your Email
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="text"
                id="email"
                name="email"
                className="border border-primary-pink focus:outline-none py-1 px-2"
                required
              />
            </div>

            <div className="flex flex-col flex-1">
              <label className="mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                className="border border-primary-pink focus:outline-none py-1 px-2"
                required
              />
            </div>
          </div>

          {/* TextArea	 */}
          <div className="flex flex-col mb-4">
            <label className="mb-1" htmlFor="message">
              Your Message
            </label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              className="border border-primary-pink focus:outline-none py-1 px-2"
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button className="bg-primary-pink text-white px-8 py-2" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
