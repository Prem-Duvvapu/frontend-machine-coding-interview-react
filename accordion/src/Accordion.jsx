import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import './style.css';

function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const onClickHandle = (index) => {
        setOpenIndex((openIndex === index) ? null : index);
    };

    return (!items || items.length === 0) ? "No items available" : (
        <div className="accordion">
            {items.map((item, index) => (
                <div className="accordion-item" key={index} >
                    <div className="accordion-title" onClick={() => onClickHandle(index)} >
                        {item.title}
                        {(openIndex === index) ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
                    </div>
                    {
                        (index == openIndex) &&
                        <div className="accordion-content">
                            {item.content}
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default Accordion;