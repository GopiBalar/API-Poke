import React, { useRef, useState } from "react";
import { sendEmail } from "../../../Services/apiServices";
import Modal from "../../common/Modal";

function Form() {
  const formRef = useRef();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await sendEmail(formRef.current);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
      setOpen(true);
    }
    // return console.log("e.preventDefault()", e.preventDefault());
  }

  function onClose() {
    setOpen(!open);
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={submit}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "paleturquoise",
          padding: "32px",
          flexGrow: 1,
          gap: "25px",
          fontWeight: "500",
        }}
      >
        <div className="row">
          <div class="form-group col-md-6">
            <label>Name :</label>
            <input
              type="text"
              name="user_name"
              class="form-control mb-6"
              id="name"
              placeholder="Enter Your Name"
              required=""
            />
          </div>
          <div class="form-group col-md-6">
            <label>Email :</label>
            <input
              type="email"
              name="user_email"
              class="form-control"
              id="email"
              placeholder="Enter Your Email"
              required=""
            />
          </div>
        </div>

        <div className="row">
          <div class="form-group">
            <label>Subject :</label>
            <input
              type="email"
              name="user_subject"
              class="form-control"
              id="subject"
              placeholder="Enter Subject"
              required=""
            />
          </div>
        </div>

        <div className="row">
          <div class="form-group ">
            <label>Message :</label>

            <textarea
              name="message"
              class="form-control"
              rows="8"
              placeholder="Enter Message"
              required=""
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="submit">
            {loading ? "Sending ..." : "Send Message"}
          </button>
        </div>
      </form>
      {open && (
        <Modal
          title={error ? "Failed!" : "Success!"}
          componet={
            error ? "Something went Wrong " : "Message sent Successfully"
          }
          closeBtnName="Ok"
          onClose={onClose}
        />
      )}
    </>
  );
}

export default Form;
