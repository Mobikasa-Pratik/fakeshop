import React from 'react';

const Section = ({ children, section_class }) => {
    return (
        <section className={`page-section ${section_class}`}>
            <div className='container max-w-7xl mx-auto px-4'>
                {children}
            </div>
        </section>
    )
}

export default Section;