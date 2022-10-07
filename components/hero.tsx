import Background from '../public/images/artist-concert.jpg'
import Image from 'next/image'

export default function Hero() {

  return (
    <div className="object-cover bg-[url('../public/images/artist-concert.jpg')] bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-16 w-7/12">
        <h1 className="self-center text-center text-4xl font-bold">
          Our tagline goes here. It&apos;s really cool and eye-catching.
        </h1>
        <p className="self-center text-center">
          <strong>246,900</strong>
           {' '}Users.{' '}
          <strong>3,904</strong>
           {' '}Artists.{' '}
          <strong>$3,800,000</strong>
           {' '}Market Value.
        </p>
        <button className="self-center text-center py-0.5 rounded bg-blue-700 px-2.5">
          Sign Up
        </button>
      </div>
    </div>
  )
}