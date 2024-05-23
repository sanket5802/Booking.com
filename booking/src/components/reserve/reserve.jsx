import React from "react";
import "./reserve.css"; // Add your styling for the pop-up here

export const ReservationPopup = () => {
 

  return (
    <div className="popup">
       <div className="popup-content">
        <span className="close-icon">
          &times;
        </span>
        <h2>Your reservation is confirmed!</h2>
        <p>Thank you for choosing our hotel. We look forward to hosting you.</p>
      </div>
     
    </div>
  );
};

