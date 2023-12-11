import React from 'react';
import Link from 'next/link';
import StudentInfo from './StudentInfo';


export default function Week2() {
  return (
      <div>
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
          <StudentInfo />
          <Link href="/project"> project </Link>
          <Link href="/week3"> week3 </Link>
      </div>
  );
}
