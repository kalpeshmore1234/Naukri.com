import Image from 'next/image'
import Logo from "../assets/logo.svg"
import LandingImg from "../assets/main.svg"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
      <main>
          <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
              <Image src={Logo} alt='logo' />
          </header> 


          <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
             <div>
                 <h1 className='capitalize text-4xl md:text-7xl font-bold'>
                      job <span className='text-primary'>tracking</span> app
                 </h1>

                 <p className='leading-loose max-w-md mt-4'>Naukri.com is a top job portal in India, helping users find jobs across various industries. With easy job searches, resume tools, and personalized recommendations, it connects job seekers with their ideal careers. Start exploring countless job opportunities today.
                 </p>


                 <Button asChild className='mt-4 px-6 py-6'>
                     <Link href='/add-job'>Get Started</Link>
                 </Button>
             </div>

             <Image src={LandingImg} alt='landing' className='hidden lg:block'/>
          </section>
      </main>
  );
}
