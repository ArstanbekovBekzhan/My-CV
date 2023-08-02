import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md'; 
import AStyle from "../../assets/styles/Aside.module.css";
import Avatarka from "../../assets/image/my-avatar.png"

const Aside = () => {
  const dataContact = [
    {
      id: 1,
      ison: <MdOutlineMailOutline className='icons'/>,
      contactName: "EMAIL",
      contactText: "bekzan659@gmail.com",
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
          <div key={index}>
            {contacts.ison}
            <h4>{contacts.contactName}</h4>
            <h4>{contacts.contactText}</h4>
          </div>
        ))
      }
      </div>
    </aside>
  );
};

export default Aside;