import Link from 'next/link';

const Volunteer = () => {
  return (
    <div>
      <h1>Volunteer</h1>
      <p>Welcome to Earth Harmony Resort, where sustainability meets luxury.</p>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/rooms">Rooms</Link>
          </li>
          <li>
            <Link href="/volunteer">Volunteer</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Volunteer;
