import React from 'react';
import {Simpson} from "../Simpson/Simpson";
import {Character} from "../Character/Character";

const Characters = () => {
    const characters = [
        {
            id: 77,
            name: "Cowboy Morty",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image:'https://rickandmortyapi.com/api/character/avatar/77.jpeg'
        },
        {
            id: 229,
            name: "Morty Mart Manager Morty",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/229.jpeg",
        },
        {   id: 316,
            name: "Shmlona Shmlobinson",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/316.jpeg",
        },
        {
            id: 318,
            name: "Shmlony Shmlicelli",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: 'https://rickandmortyapi.com/api/character/avatar/318.jpeg',

        }

    ]
    return (
        <div>
            {
                characters.map(character=><Character key = {character.id} character={character}/>)
            }
        </div>
    );
};

export {Characters};