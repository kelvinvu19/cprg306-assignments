import React from 'react';
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <YourName />
      <CourseSection />
      <GitHubRepository />
    </div>
  );
}

function YourName() {
  return <h1>Kelvin Vu</h1>;
}

function CourseSection() {
  return <h1>CPRG 306 B</h1>;
}

function GitHubRepository() {
  return (
    <Link href="https://github.com/kelvinvu19/cprg306-assignments">
      <a>GitHub Repository</a>
    </Link>
  );
}
