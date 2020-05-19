import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faqContents.title} image={faqContents.image} />
    <p>{faqContents.sample}</p>
  </Container>
);

export default Faq;
