import React, { useState } from 'react';

export const Card = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [person, setPerson] = useState({ ...props.person });

    const saveChanges = () => {
        props.editPersonOnList(person);
        setEditMode(false);
    };

    const cancelEdit = () => {
        setPerson(props.person);
        setEditMode(false);
    };

    const deleteCard = () => {
        const flag = window.confirm(`¿Are you sure to delete ${person.id} person`);
        if (flag) {
            props.removePersonFromList(person.id);
        }
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setPerson((prevPerson) => {
            return {
                ...prevPerson,
                [name]: value
            };
        });
    };

    return (
        <div className="card">
            <div className="card-body">
                <form>

                    <div className="row justify-content-between mb-3">

                        <div className="col-auto">
                            <div className="row">

                                <div className="col-12">
                                    <label htmlFor={`person-id-${person.id}`}>
                                        ID
                                    </label>
                                </div>

                                <div className="col-auto">
                                    <input className="form-control"
                                        id={`person-${person.id}`}
                                        name="id"
                                        value={person.id}
                                        type="text"
                                        disabled
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="col-auto">
                            <button className="btn btn-outline-primary"
                                onClick={() => setEditMode(true)}
                                type="button"
                                disabled={editMode}
                            >
                                Edit card
                            </button>
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group col-4">
                            <label htmlFor={`person-firstname-${person.id}`}>
                                First name
                            </label>
                            <input className="form-control"
                                id={`person-firstname-${person.id}`}
                                onChange={handleChange}
                                name="First name"
                                value={person['First name']}
                                type="text"
                                disabled={!editMode}
                            />
                        </div>

                        <div className="form-group col-4">
                            <label htmlFor={`person-lastname-${person.id}`}>
                                Last name
                            </label>
                            <input className="form-control"
                                id={`person-lastname-${person.id}`}
                                onChange={handleChange}
                                name="Last name"
                                value={person['Last name']}
                                type="text"
                                disabled={!editMode}
                            />
                        </div>

                        <div className="form-group col-4">
                            <label htmlFor={`person-age-${person.id}`}>
                                Age
                            </label>
                            <input className="form-control"
                                id={`person-age-${person.id}`}
                                onChange={handleChange}
                                name="Age"
                                value={person['Age']}
                                type="text"
                                disabled={!editMode}
                            />
                        </div>

                    </div>

                    <div className="row justify-content-between">

                        <div className="col-auto">
                            <div className={editMode ? 'form-row' : 'd-none'}>

                                <div className="col-auto">
                                    <button className="btn btn-primary"
                                        onClick={saveChanges}
                                        type="button"
                                    >
                                        Save changes
                                    </button>
                                </div>

                                <div className="col-auto">
                                    <button className="btn btn-outline-info"
                                        onClick={cancelEdit}
                                        type="button"
                                    >
                                        Cancel
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className="col-auto">
                            <button className="btn btn-outline-danger"
                                onClick={deleteCard}
                                type="button"
                            >
                                Delete card
                            </button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};
