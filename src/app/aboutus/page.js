import Link from 'next/link';
import details from '../data/data';

export default function AboutUs() {

    return (
        <div>
            <h1>Meet Our Developers</h1>
            <ul>
                {details.map((dev) => (
                    <li key={dev.id}>
                        <Link href={`/aboutus/${dev.id}`}>
                            <div>{dev.name}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
