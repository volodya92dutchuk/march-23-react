import React from 'react';
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            name:'Homer',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            name:'Marge',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            name:'Bart',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
        },
        {
            name:'Lisa',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
        }

    ]
    return (
        <div>
            {
                simpsons.map(simpson=><Simpson key = {simpson.id} simpson = {simpson}/>)
            }
        </div>
    );
};

export {Simpsons};