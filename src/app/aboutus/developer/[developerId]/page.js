import details from "../page";

export default function DeveloperDetails({ params }) {
    const { developerId } = params;

    const developer = details.find((dev) => dev.id === parseInt(developerId));

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
