import Link from 'next/link';

export default function ThirdQuestion(){
    return(
        <> <h1>Answer</h1>
        <p>We would like to share some helpful information about Edge Functions, Serverless Functions, and Edge Middleware with Vercel. Depending on your web app's needs, you may opt for Edge Functions to boost performance, Serverless Functions for dynamic server-side functionality, or Edge Middleware for a balanced mix of both. We understand that choosing the right option may be overwhelming, but we are here to assist you. Please feel free to contact us for further guidance or if you have any specific questions.</p>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        </>
    );
}