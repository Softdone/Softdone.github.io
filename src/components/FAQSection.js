import React, { useState } from 'react';


const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Estado para controlar la pregunta activa

    const faqs = [
        { question: "¿Cómo Convertir Usuarios En Clientes?", answer: "Aquí va la respuesta...1" },
        { question: "¿Qué Puedo Hacer Para Aumentar Mi Visibilidad Online?", answer: "Aquí va la respuesta..." },
        // ...más preguntas y respuestas
    ];

    const toggleFAQ = index => {
        // Si la pregunta ya está activa, la cerramos. Si no, la abrimos.
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <div className="faq-header">
                <h2>¿TIENES UNA PREGUNTA?</h2>
                <h1>PREGUNTAS FRECUENTES</h1>
                <p>Estamos para ayudarlo los 7 días de la semana y responder dentro de las 24 horas. Además, puede encontrar la mayoría de las respuestas a sus preguntas aquí.</p>
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