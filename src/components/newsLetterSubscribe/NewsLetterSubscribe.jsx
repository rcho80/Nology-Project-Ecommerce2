import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "../newsLetterForm/NewsLetterForm";

const NewsLetterSubscribe = () => {
    const MAILCHIMP_URL =
        "https://gmail.us2.list-manage.com/subscribe/post?u=79b0fac893a128121e9e3fd63&amp;id=580953d81e";

    // const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL;
    // console.log(MAILCHIMP_URL);

    return (
        <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={(props) => {
                const { subscribe, status, message } = props || {};
                return (
                    <NewsLetterForm
                        status={status}
                        message={message}
                        onValidated={(formData) => subscribe(formData)}
                    />
                );
            }}
        />
    );
};

export default NewsLetterSubscribe;
