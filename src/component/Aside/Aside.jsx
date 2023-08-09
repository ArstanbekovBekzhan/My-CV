import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md'; 
import AStyle from "../../assets/styles/Aside.module.css";
import Avatarka from "../../assets/image/my-avatar.png"
import { IoIosPhonePortrait,IoLogoWhatsapp } from 'react-icons/io'; 
import { VscLocation } from 'react-icons/vsc'; 
import { FaRegCalendarAlt, FaTelegram } from 'react-icons/fa';

const Aside = () => {
  const dataContact = [
    {
      id: 1,
      ison: <MdOutlineMailOutline className='icons'/>,
      contactName: "EMAIL",
      contactText: "bekzan659@gmail.com",
      links: "mailto"
    },
    {
      id: 2,
      ison: <IoIosPhonePortrait className='icons'/>,
      contactName: "PHONE",
      contactText: "0501072018",
      links: "tel"
    },
    {
      id: 3,
      ison: <VscLocation className='icons'/>,
      contactName: "LOCATION",
      contactText: "с. Кыргызстан, г. Кант",
      links2: "https://www.google.com/maps/@42.8903425,74.8411007,14z?entry=ttu"
    },
    {
      id: 4,
      ison: <FaRegCalendarAlt className='icons'/>,
      contactName: "BIRTHDAY",
      contactText: "10.06.2006",
      links2: "#"
    },
    {
      id: 5,
      ison: <FaTelegram className='icons'/>,
      contactName: "telegram",
      contactText: "@Ar_bekzhan",
      links2: "https://t.me/Ar_bekzhan"
    },
    {
      id: 6,
      ison: <IoLogoWhatsapp className='icons'/>,
      contactName: "whatsapp",
      contactText: "",
      links2: "https://t.me/Ar_bekzhan"
    }
  ]
  return (
    <aside className={AStyle.aside}>
      <div className={AStyle.aside_top}>
        <div className={AStyle.aside_top_avatarka}>
          <img src={Avatarka} alt="" />
        </div>
        <h5 className={AStyle.aside_top_name}>Арстанбеков Бекжан</h5>
        <h5 className={AStyle.aside_top_job_title}>
          Frontend developer
        </h5>
      </div>
    
      <div className={AStyle.aside_contact}>
          {
        dataContact.map((contacts,index) => (
          <a href={contacts.links2 ? contacts.links2 : `${contacts.links}:${contacts.contactText}`} className={AStyle.aside_contact_item} key={index} target='_blank'>
          <div className={AStyle.aside_contact_item_isons}>
            {contacts.ison}
          </div>
          <div className={AStyle.aside_contact_item_text}>
            <h5>{contacts.contactName}</h5>
            <p>{contacts.contactText}</p> 
          </div>
        </a>
        ))
      }
      </div>
    </aside>
  );
};

export default Aside;