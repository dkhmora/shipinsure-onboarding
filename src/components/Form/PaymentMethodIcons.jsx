import React from "react";
import AmexLogo from "../../assets/icons/AmexLogo.svg";
import DinersClubLogo from "../../assets/icons/DinersClubLogo.svg";
import MasterCardLogo from "../../assets/icons/MasterCardLogo.svg";
import VisaLogo from "../../assets/icons/VisaLogo.svg";
import "./Form.css";

export default function PaymentMethodIcons() {
  return (
    <div className="payment-method-icons-container">
      <img src={VisaLogo} className="payment-method-icons" alt="visa-logo" />
      <img src={AmexLogo} className="payment-method-icons" alt="amex-logo" />
      <img
        src={MasterCardLogo}
        className="payment-method-icons"
        alt="mastercard-logo"
      />
      <img
        src={DinersClubLogo}
        className="payment-method-icons"
        alt="dinersclub-logo"
      />
    </div>
  );
}
