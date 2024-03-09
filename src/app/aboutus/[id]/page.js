import details from "../../data/data";

export default function DeveloperDetails({ params }) {
    const { id } = params;

    // Find the developer in the details array based on the developerId
    const developer = details.find((dev) => dev.id === parseInt(id));

    
    if (!developer) {
        return <h1>Developer doesn't exist</h1>;
    }

    return (
        <div>
            <h1>{developer.name}</h1>
            <p>{developer.role}</p>
        </div>
    );
}
