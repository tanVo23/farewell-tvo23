import People from "../components/People";

function PeopleContainer({people}) {

    return(
        <ul>
            {people.map(people => <People key={people.id} people={people} /> )}
        </ul>
    );
}

export default PeopleContainer;