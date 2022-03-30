import { useEffect } from "react";
import { useDebugState } from "use-named-state";

import Notification from "../../ui/Notification";

const ContactForm = () => {
  const [formData, setFormData] = useDebugState("formData", { email: "", name: "", message: "" });
  const [requestStatusMessage, setRequestStatusMessage] = useDebugState("requestStatus", { status: "", message: "" });
  const [isBtnDisabled, setIsBtnDisabled] = useDebugState("isBtnDisabled", false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({ ...formData, [name]: value });
  };

  const submitPost = async (formData) => {
    setRequestStatusMessage({ ...requestStatusMessage, status: "pending", message: "We are sending your message" });
    const date = Date.now();
    try {
      const data = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      });

      const res = await data.json();
      if (!data.ok) throw new Error(`${res.message}`);

      setRequestStatusMessage({ ...requestStatusMessage, status: "success", message: "We successfully send your message" });
      console.log(Date.now() - date);
    } catch (error) {
      console.log(`${error.message}`);
      setRequestStatusMessage({ ...requestStatusMessage, status: "error", message: `${error.message}` });
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    setFormData({ email: "", name: "", message: "" });
    setIsBtnDisabled(true);
    e.preventDefault();
    await submitPost(formData);
    setIsBtnDisabled(false);
  };

  useEffect(() => {
    if (!(requestStatusMessage.status === "error" || requestStatusMessage.status === "success")) return;

    const timer = setTimeout(() => {
      setRequestStatusMessage({ ...requestStatusMessage, status: "", message: "" });
    }, 2000);

    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestStatusMessage.status]);

  return (
    <>
      <section className="py-16">
        <div className="container">
          <h2 className="text-center mb-8 text-4xl text-primary-pink">How can i help you ??</h2>
          <form className="max-w-3xl mx-auto shadow-xl p-6" onSubmit={handleForm}>
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
              <button disabled={isBtnDisabled} className="bg-primary-pink text-white px-8 py-2" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      {requestStatusMessage.status && <Notification requestStatusMessage={requestStatusMessage} />}
    </>
  );
};

export default ContactForm;
