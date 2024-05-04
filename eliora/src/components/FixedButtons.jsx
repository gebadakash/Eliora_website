import { BsWhatsapp } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import "./FixedButtons.css"; 
import { useState } from "react";

const FixedButtons = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=+918956101181&text=Hello");
  };

  const handleCallClick = () => {
    window.location.href = "tel: +918956101181";
  };

  return (
    <div>
      {/* WhatsApp button */}
      <button className="fixed-btn whatsapp-btn" onClick={handleWhatsAppClick}>
        <BsWhatsapp />
      </button>
      {/* Call button */}
      <button className="fixed-btn call-btn" onClick={handleCallClick}>
        <BiSolidPhoneCall />
      </button>
    </div>
  );
};

export default FixedButtons;
