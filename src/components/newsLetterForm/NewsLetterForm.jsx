import { useState } from "react";
// import { sanitize } from "../../../utils/miscellaneous";
// import Loading from "../../loading";
import styles from "./NewsLetterForm.module.scss";
import { decode } from "html-entities";

const NewsletterForm = ({ status, message, onValidated }) => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");

    const handleFormSubmit = () => {
        setError(null);

        if (!email) {
            setError("Please enter a valid email address");
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        // On success return true
        return email && email.indexOf("@") > -1 && isFormValidated;
    };

    /**
     * Handle Input Key Event.
     *
     * @param event
     */
    const handleInputKeyEvent = (event) => {
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            handleFormSubmit();
        }
    };

    /**
     * Extract message from string.
     *
     * @param {String} message
     * @return {null|*}
     */
    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split("-") ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return decode(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? decode(formattedMessage) : null;
    };

    return (
        <div>
            <h3 className={styles.newsLetterForm__text}>
                Join our Newsletter for the latest promotions
            </h3>
            <div className={styles.newsLetterForm__container}>
                <div className={styles.newsLetterForm__form}>
                    <input
                        onChange={(event) =>
                            setEmail(event?.target?.value ?? "")
                        }
                        type="email"
                        placeholder="Enter your email"
                        className={styles.newsLetterForm__form__input}
                        onKeyUp={(event) => handleInputKeyEvent(event)}
                    />

                    <div>
                        <button
                            className={styles.newsLetterForm__form__btn}
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className={styles.newsLetterForm__responses}>
                    {status === "sending" && <div>Sending...</div>}
                    {status === "error" || error ? (
                        <div
                            className="newsletter-form-error"
                            dangerouslySetInnerHTML={{
                                __html: error || getMessage(message)
                            }}
                        />
                    ) : null}
                    {status === "success" && status !== "error" && !error && (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: decode(message)
                            }}
                        />
                    )}
                    {/* {"sending" === status ? (
                    <Loading
                        showSpinner
                        message="Sending..."
                        contentColorClass="text-white"
                        hasVisibilityToggle={false}
                    />
                ) : null} */}
                    {/* {"error" === status || error ? (
                    <div
                        className={styles.newsLetterForm__responses__error}
                        dangerouslySetInnerHTML={{
                            __html: error || getMessage(message)
                        }}
                    />
                ) : null}
                {"success" === status && "error" !== status && !error && (
                    <div
                        className={styles.newsLetterForm__responses__success}
                        dangerouslySetInnerHTML={{ __html: decode(message) }}
                    />
                )} */}
                </div>
            </div>
        </div>
    );
};

export default NewsletterForm;
