import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "./";
import { styles } from "../styles";
import Lottie from "lottie-react";
import sentAnimation from "../assets/Sent.json";

const FormComponent = () => {
  const [name, setName] = useState<string>("");
  const [contactDetails, setContactDetails] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [emailDetails, setEmailDetails] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [contactError, setContactError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [successSent, setSuccessSent] = useState<boolean>(false);

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

    if (name && contactDetails && message) {
      const data = {
        name,
        contactDetails,
        emailDetails,
        message,
      };
      console.log(data);
      setSuccessSent(true);
      setName("");
      setContactDetails("");
      setEmailDetails("");
      setMessage("");
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
            <label style={{textAlign: 'start'}}>Tell us what you'd like cleaning</label>
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
                      fontStyle: 'italic',
                    }}
                  >
                    *If applicable, please provide approximate dimensions for rooms
                  </p>
          </div>
        </form>
      )}

      {!successSent ? (
        <Button text="Submit" onClick={handleSubmit} />
      ) : (
        <Button text="New Form" onClick={() => setSuccessSent(false)} />
      )}
    </>
  );
};

export default FormComponent;
