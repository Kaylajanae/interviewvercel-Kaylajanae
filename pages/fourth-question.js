import Link from 'next/link';

export default function FourthQuestion(){
    return(
        <> <h1>Answer</h1>
        <p>Thank you for reaching out to us. Redirecting the "/blog" path of your Vercel project to another website can be tricky, but we're here to help. To set up a redirection rule, you can use the "rewrites" configuration in your project's configuration file (vercel.json or now.json). We understand that this might be confusing, so we'll guide you through the process.  Let use the below code as an example:

 

In the configuration file, replace the placeholder `"https://www.example.com"` with the actual URL to which you want to redirect the "/blog" path. The `:path*` placeholder captures any additional path segments and forwards them to the destination URL. Once you've made this change, don't forget to deploy your project on Vercel again to apply the redirection rule. You can also ask the community on GitHub Discussions.

We hope this helps.
</p>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        </>
    );
}