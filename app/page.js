import React from 'react';
import Link from 'next/link';
import StudentInfo from './StudentInfo';


const HomePage = <h1>CPRG 306: Web Development 2 - Assignments</h1>
const Page = () => {
    return (
        <div>
            <StudentInfo />
            <Link href="/week2"> week2 </Link>
        </div>
    );
}
