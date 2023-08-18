import Link from 'next/link';

export default function SixthQuestion(){
    return(
        <> <h1>Answer</h1>
        <p>We appreciate you reaching out to us. If you're concerned about search engines indexing your website, we understand how you feel. There is a simple solution to this, which is creating a "robots.txt" file in your root directory. This file will give instructions to search engine crawlers on what content not to index. We'd like to guide you through the process of creating a basic "robots.txt" file.
Here's how you can create a basic "robots.txt" file to prevent indexing:
1. Create a new text file and name it "robots.txt".
2. Open the file in a text editor and add the following lines:
```
User-agent: *
Disallow: /
```
These lines tell all search engine crawlers that they should not index any content on your website.
3. Save the "robots.txt" file and upload it to the root directory of your website.
</p>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        </>
    );
}