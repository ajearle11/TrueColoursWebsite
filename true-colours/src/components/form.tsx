import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "./";
import { styles } from "../styles";
import Lottie from "lottie-react";
import sentAnimation from "../assets/Sent.json";
import emailjs from "@emailjs/browser";

const FormComponent = () => {
  const [name, setName] = useState<string>("");
  const [contactDetails, setContactDetails] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [emailDetails, setEmailDetails] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [contactError, setContactError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [successSent, setSuccessSent] = useState<boolean>(false);
  const [deodoriserBool, setDeodoriserBool] = useState<boolean>(false);
  const [stainGuardBool, setStainGuardBool] = useState<boolean>(false);
  const [messageSendError, setMessageSendError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //   const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name === "") {
      setNameError(true);
    }
    if (contactDetails === "") {
      setContactError(true);
    }
    if (message === "") {
      setMessageError(true);
    }

    setLoading(true);

    if (name && contactDetails && message) {
      const templateParams = `Name: ${name}\nContact Details: ${contactDetails}\nEmail: ${emailDetails}\nMessage: ${message}\nDeodoriser: ${deodoriserBool}\nStain Guard: ${stainGuardBool}`;

      emailjs
        .send(
          import.meta.env.VITE_YOUR_SERVICE_ID,
          import.meta.env.VITE_YOUR_TEMPLATE_ID,
          {
            to_name: "Alex",
            from_name: "EmailJS",
            message: templateParams,
          },
          {
            publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setSuccessSent(true);
            setName("");
            setContactDetails("");
            setEmailDetails("");
            setMessage("");
            setStainGuardBool(false);
            setDeodoriserBool(false);
            setLoading(false);
          },
          (error) => {
            setMessageSendError(true);
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <>
      {successSent ? (
        <>
          <p style={{ fontSize: styles.fontSizes.midLarge }}>
            You've successfully sent your request
          </p>
          <Lottie
            className="lottie"
            animationData={sentAnimation}
            loop={false}
          />
          <p
            style={{ fontSize: styles.fontSizes.medium, marginBottom: "50px" }}
          >
            You can send another by clicking
          </p>
        </>
      ) : loading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <form id="form">
          <div className="form-group">
            <label>Name</label>
            <input
              style={{
                width: "100%",
                border: nameError ? `3px solid ${styles.colors.red}` : "",
              }}
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value !== "") {
                  setNameError(false);
                }
                setName(e.target.value);
              }}
            />
            {nameError ? (
              <p
                style={{
                  fontSize: styles.fontSizes.xSmall,
                  color: styles.colors.red,
                  fontWeight: "bold",
                }}
              >
                You must enter your name
              </p>
            ) : null}
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              style={{
                width: "100%",
                border: contactError ? `3px solid ${styles.colors.red}` : "",
              }}
              type="text"
              value={contactDetails}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value !== "") {
                  setContactError(false);
                }
                setContactDetails(e.target.value);
              }}
            />
            {contactError ? (
              <p
                style={{
                  fontSize: styles.fontSizes.xSmall,
                  color: styles.colors.red,
                  fontWeight: "bold",
                }}
              >
                You must enter your contact number
              </p>
            ) : null}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              style={{
                width: "100%",
              }}
              type="text"
              value={emailDetails}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmailDetails(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label style={{ textAlign: "start" }}>
              Tell us what you'd like cleaning
            </label>
            <TextareaAutosize
              minRows={4}
              style={{
                width: "100%",
                border: messageError ? `3px solid ${styles.colors.red}` : "",
              }}
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                if (e.target.value !== "") {
                  setMessageError(false);
                }
                setMessage(e.target.value);
              }}
            />
            {messageError ? (
              <p
                style={{
                  fontSize: styles.fontSizes.xSmall,
                  color: styles.colors.red,
                  fontWeight: "bold",
                }}
              >
                You must enter a message
              </p>
            ) : null}
            <p
              style={{
                fontSize: styles.fontSizes.xSmall,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              *If applicable, please provide approximate dimensions for rooms
            </p>
            <label
              style={{
                marginTop: "30px",
                marginBottom: "10px",
                fontSize: styles.fontSizes.small,
                fontWeight: "bold",
                textAlign: "start",
              }}
            >
              Please tick if you're interested in the following:
            </label>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <input
                type="checkbox"
                id="deodoriser"
                name="deodoriser"
                style={{ marginRight: "10px" }}
                onChange={() => {
                  setDeodoriserBool(!deodoriserBool);
                }}
                checked={deodoriserBool}
              />
              <label htmlFor="deodoriser">Deodoriser Treatment</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                style={{ marginRight: "10px" }}
                id="stain-guard"
                name="stain-guard"
                onChange={() => {
                  setStainGuardBool(!stainGuardBool);
                }}
                checked={stainGuardBool}
              />
              <label htmlFor="stain-guard">Stain Guard Treatment</label>
            </div>
          </div>
          {messageSendError ? (
            <p
              style={{
                fontSize: styles.fontSizes.xSmall,
                color: styles.colors.red,
                fontWeight: "bold",
              }}
            >
              Error sending a message. Try again.
            </p>
          ) : null}
        </form>
      )}

      {!successSent ? (
        <Button text="Get My Quote" onClick={handleSubmit} />
      ) : (
        <Button text="New Form" onClick={() => setSuccessSent(false)} />
      )}
    </>
  );
};

export default FormComponent;
