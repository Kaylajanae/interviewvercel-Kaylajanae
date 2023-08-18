import Link from 'next/link';

export default function FirstQuestion(){
    return(
        <> <h1>Answer</h1>
        <p>I recently tackled an escalation for a client who was experiencing trouble with their branding links. I took the initiative to escalate the issue to our engineering team via a JIRA ticket. During the process, I identified several scenarios that had been overlooked and pointed out an error within the code that was retrieving incorrect information. One of the scenarios required us to partner with our compliance and legal team due to a misrepresentation of data. However, I was confident in the solution I provided and we were able to launch the fix during our mobile update release last Friday.</p>
        <h2>
            <Link href="/">Back the main page</Link>
        </h2>
        </>
    );
}