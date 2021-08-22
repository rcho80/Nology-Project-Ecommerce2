import React from "react";
import styles from "./MailChimp.module.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailChimp = () => {
    const postUrl = `https://gmail.us2.list-manage.com/subscribe/post?u=79b0fac893a128121e9e3fd63&id=580953d81e`;

    return (
        <div>
            <MailchimpSubscribe url={postUrl} />
        </div>
    );
};

export default MailChimp;
