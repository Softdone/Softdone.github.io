import React, { useState } from 'react';


const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Estado para controlar la pregunta activa

    const faqs = [
        { question: "How do you ensure that the software you develop meets our specific needs and requirements?", answer: "We ensure the software meets your needs by engaging in a collaborative process, incorporating iterative feedback, and conducting thorough testing to align the final product with your specific requirements." },
        { question: "Can you provide training and support for our team to use the new software effectively?", answer: "Certainly! We offer comprehensive training and support to empower your team to use the new software effectively, ensuring a smooth transition and continued assistance post-deployment." },
        { question: "What measures do you take to protect our sensitive data during software development?", answer: "We implement stringent security protocols throughout the software development process, including data encryption, secure coding practices, and regular security audits, to safeguard your sensitive data against unauthorized access and breaches." },
        { question: "What are your payment terms and accepted methods for software development projects?", answer: "Payment methods: 50% of the total cost (or the cost per phase) must be paid before starting, and the remaining 50% on delivery. Cash or Transfers (Paypal)" },
    ];

    const toggleFAQ = index => {
        // Si la pregunta ya está activa, la cerramos. Si no, la abrimos.
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <div className="faq-header">
                <h2>GOT A QUESTION?</h2>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <p>We are here to help 7 days a week and will respond within 24 hours. Plus, you can find most answers to your questions right here.</p>
            </div>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
                        </button>
                        <div className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;