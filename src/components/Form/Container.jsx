import React, { useEffect, useState } from "react";
import { useTransition, animated, useSpringRef } from "react-spring";
import "./Form.css";
import PersonalInfoForm from "./PersonalInfoForm";
import ReviewSection from "./ReviewSection";
import MonthlyOrdersForm from "./MonthlyOrdersForm";
import BillingForm from "./BillingForm";

export default function Container({
  currentFormTitle,
  onSubmit,
  onClickGoBack,
}) {
  const renderForm = (formTitle) => {
    switch (formTitle) {
      case "Personal Info":
        return <PersonalInfoForm stepTitle={formTitle} onSubmit={onSubmit} />;
      case "Monthly Orders":
        return <MonthlyOrdersForm stepTitle={formTitle} onSubmit={onSubmit} />;
      case "Billing":
        return (
          <BillingForm
            stepTitle={formTitle}
            onSubmit={onSubmit}
            onClickGoBack={onClickGoBack}
          />
        );
      default:
        return (
          <div>
            <p className="success-text">Welcome to the ShipInsure family!</p>
          </div>
        );
    }
  };
  const transRef = useSpringRef();
  const transitions = useTransition(currentFormTitle, {
    ref: transRef,
    keys: null,
    from: {
      position: "absolute",
      opacity: 0,
      transform: "translate3d(0, -20px, 0)",
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [currentFormTitle]);

  return (
    <div className="main-container">
      {transitions(
        (style, item, key) =>
          item && (
            <animated.div
              key={key}
              style={style}
              className="form-animated-container"
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {renderForm(item)}

                <ReviewSection />
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}
