import React from 'react';
import BookCard from '.';
import book from '../../../assets/images/book.png';

const BookCardComponent = {
    title: 'MOLECULES/BookCard',
    component: BookCard
};

const Template = (args) => (
    <BookCard {...args} />
);
export const DemoBookCard =  Template.bind({});
DemoBookCard.args = {
    book:{
        author: 'StephenFrost, Raafi-Karim ...', 
        readTime: '15-min',
        readCount: '17.1k',
        name: 'Building an Inclusive Organization',
        imgAlt : 'Book Name',
        imgSrc : "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg"
    },
    btnText: "Currently reading"
};


export default BookCardComponent;