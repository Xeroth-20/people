import React from 'react';

/* My Components */
import { PeopleForm } from './components/PeopleForm';
import { CardList } from './components/CardList';

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: []
        };

        /* Binding */
        this.handleSubmit = this.handleSubmit.bind(this);
        this.editPersonOnList = this.editPersonOnList.bind(this);
        this.removePersonFromList = this.removePersonFromList.bind(this);
    }

    componentDidMount() {
        this.setState({
            people: this.getPeople()
        });
    }

    componentDidUpdate(prevState) {
        if (prevState.people != this.state.people) {
            this.saveChangesOnLS();
        }
    }

    getPeople() {
        const people = localStorage.getItem('people');
        return people ? JSON.parse(people) : [];
    }

    addPersonToList(person) {
        this.setState((prevState) => {
            return {
                people: [person, ...prevState.people]
            };
        });
    }

    editPersonOnList(editPerson) {
        const index = this.state.people.findIndex((person) => person.id === editPerson.id);
        if (index > -1) {
            const people = this.state.people.slice();
            people[index] = editPerson;
            this.setState({ people });
        }
    }

    removePersonFromList(personId) {
        this.setState((prevState) => {
            return {
                people: prevState.people.filter((person) => person.id !== personId)
            };
        });
    }

    saveChangesOnLS() {
        const people = JSON.stringify(this.state.people);
        localStorage.setItem('people', people);
    }

    handleSubmit(person) {
        this.addPersonToList({
            id: Date.now().toString(16),
            ...person
        });
    }

    render() {
        return (
            <div className="container-xl py-5">
                <header>
                    <h1 className="display-4 text-primary font-weight-bold">
                        PEOPLE
                    </h1>
                </header>
                <PeopleForm handleSubmit={this.handleSubmit} />
                <div className="separator my-4"></div>
                <div className="recently-added">
                    <h2 className="h4 text-secondary mb-3">Recently added</h2>
                    {
                        this.state.people.length !== 0
                            ? <CardList people={this.state.people}
                                editPersonOnList={this.editPersonOnList}
                                removePersonFromList={this.removePersonFromList}
                            />
                            : <p className="text-muted">Seems like there is no person, start adding someone :)</p>
                    }
                </div>
            </div>
        );
    }
}
