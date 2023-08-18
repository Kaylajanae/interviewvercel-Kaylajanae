import Link from 'next/link';

export default function SecondQuestion(){
    return(
        <> <h1>Answer</h1>
        <p>When it comes to web development, both Next.js and React have their own strengths. React is a library created by Facebook that focuses on developing flexible and reusable user interfaces. It offers an efficient way to manage state and render only the necessary parts of a webpage. On the other hand, Next.js is a framework that builds on React's capabilities by providing server-side rendering, static site generation, and routing features. This makes it a great choice for creating complex, SEO-friendly applications with improved performance. While React is great for creating UI components, Next.js makes it easier to handle server-side rendering and build scalable web applications with a seamless experience.
</p>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        </>
    );
}