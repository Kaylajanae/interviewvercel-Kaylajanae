import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Kaylajanae Saenz< a href="https://www.shecodes.io/graduates/23023-kaylajanae-saenz">, aspiring Senior Customer Success Engineer</a>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={54}
              priority
            />
          </a>
        </div>
      </div>
      <br></br>
<br></br>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <br></br>
      <br></br>
    <div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h3 className={`mb-3 text-2xl font-semibold`}>
            Click here for Question {' '} <Link href="/first-question">#1 </Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Decribe how you solved a challenge that one of your previous teams faced. How did you determine your solution was successful?
          </p>
    </div>
    <br></br>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h3 className={`mb-3 text-2xl font-semibold`}>
            Click here for Question {' '} <Link href="/second-question">#2 </Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            How would you compare Next.js with another framework? 
          </p>
    </div>
    <br></br>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h3 className={`mb-3 text-2xl font-semibold`}>
            Click here for Question{' '}<Link href="/third-question">#3 </Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A customer has reached out asking, "When should I choose to use Edge Functions,Serverless Functions, or Edge Middleware with Vercel?"
          </p>
    </div>
    <br></br>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h3 className={`mb-3 text-2xl font-semibold`}>
            Click here for Question{' '}<Link href="/fourth-question">#4 </Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A customer has a project on Vercel and they want to redirect with /blog path to another website. Write a reply to the customer.
          </p>
    </div>
    <br></br>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h3 className={`mb-3 text-2xl font-semibold`}>
            Click here for Question{' '}<Link href="/fifth-question">#5 </Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Customer has responded to your previous response with..."I'm so frustrated. I've been trying to make this work for hours and I just can't figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions."
          </p>
    </div>
    <br></br>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h3 className={`mb-3 text-2xl font-semibold`}>
            Click here for Question {' '}<Link href="/sixth-question">#6 </Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to this customer.
          </p>
    </div>
    <br></br>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h3 className={`mb-3 text-2xl font-semibold`}>
            Click here for Question {' '}<Link href="/seventh-question">#7 </Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            How could we improve or alter this familiarization execerise? 
          </p>
    </div>  
      </div>
    </main>
  )
}
