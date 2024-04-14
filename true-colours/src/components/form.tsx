import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "./";
import { styles } from "../styles";

const FormComponent = () => {
  const [name, setName] = useState<string>("");
  const [contactDetails, setContactDetails] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [contactError, setContactError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

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
        message,
      };
      console.log(data);
    }
  };

  return (
    <>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
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
          <label>Message</label>
          <TextareaAutosize
            minRows={4}
            style={{
              width: "100%",
              border: messageError ? `3px solid ${styles.colors.red}` : "",
            }}
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
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
        </div>
      </form>

      <Button text="Submit" onClick={handleSubmit} />
    </>
  );
};

export default FormComponent;
