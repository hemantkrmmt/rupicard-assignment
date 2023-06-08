import React from "react";
import "./index.css";

export default function TermsCheckBox() {
  return (
    <div className="terms-checkbox">
      <input type="checkbox" />
      <span className="checkbox">
        You agree to be contacted by Uni Cards over Call, SMS, Email <br /> or
        WhatsApp to guide you through your application.
      </span>
    </div>
  );
}
