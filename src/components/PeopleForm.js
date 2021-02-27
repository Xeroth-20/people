import React, { useState } from 'react';

export const PeopleForm = (props) => {
    const [person, setPerson] = useState({});

    const cleanForm = () => {
        setPerson({});
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setPerson((prevPerson) => {
            return {
                ...prevPerson,
                [name]: value
            };
        });;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(person);
        cleanForm();
    };

    return (
        <div className="people-form">
            <form onSubmit={handleSubmit}>

                <div className="form-row">
                    <div className="col-4">
                        <input className="form-control"
                            onChange={handleChange}
                            name="First name"
                            value={person['First name'] || ''}
                            type="text"
                            placeholder="First name"
                        />
                    </div>

                    <div className="col-4">
                        <input className="form-control"
                            onChange={handleChange}
                            name="Last name"
                            value={person['Last name'] || ''}
                            type="text"
                            placeholder="Last name"
                        />
                    </div>

                    <div className="col-2">
                        <input className="form-control"
                            onChange={handleChange}
                            name="Age"
                            value={person['Age'] || ''}
                            type="text"
                            placeholder="Age"
                        />
                    </div>

                    <div className="col-2">
                        <button className="btn btn-primary w-100">
                            SAVE
                        </button>
                    </div>

                </div>

            </form>
        </div>
    );
};
