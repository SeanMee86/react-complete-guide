import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>404 not found...</h1>
        <p>Try <Link href={'/'}><a>going back</a></Link></p>
    </div>
);

export default errorPage;