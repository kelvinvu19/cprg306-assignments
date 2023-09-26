import React from 'react';
import Link from 'next/link';
import StudentInfo from '../StudentInfo';

export default function Week2() {
  return (
      <div>
          <h1>My Shopping List</h1>
          <p> Name: Kelvin Vu</p>
          <h1>CPRG 306 B</h1>
          <Link href="https://github.com/kelvinvu19/cprg306-assignments"> https://github.com/kelvinvu19/cprg306-assignments </Link>
      </div>
  );
}
