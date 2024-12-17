"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "How do we serve food?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How is our food quality?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How do we give home delivery?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      <main
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Questions Looks Here
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#4b5563",
            marginBottom: "3rem",
          }}
        >
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>

        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "0.5rem",
                boxShadow:
                  "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
                transition: "transform 0.2s",
              }}
            >
              <div
                onClick={() => toggleFAQ(index)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 style={{ fontSize: "1.125rem", fontWeight: "500" }}>
                  {faq.question}
                </h3>
                <span style={{ fontSize: "1.5rem" }}>
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#4b5563",
                    marginTop: "1rem",
                  }}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </main>\
      <footer>
        <div style={{backgroundColor:"gray",color:"white",padding:"30px",width:"1400px"}}>
          <span >
            Copyright ©2024 by Aleena AMIR. All Rights Reserved.
          </span>
        </div>
        </footer>
    </div>
  );
};

export default FAQPage;
