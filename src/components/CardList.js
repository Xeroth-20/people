import React from 'react';

/* My Components */
import { Card } from './Card';

export const CardList = (props) => {
    const peopleCard = props.people.map((person) => {
        return (
            <Card key={person.id}
                person={person}
                editPersonOnList={props.editPersonOnList}
                removePersonFromList={props.removePersonFromList}
            />
        );
    });

    return (
        <div className="card-list">
            {peopleCard}
        </div>
    );
};
