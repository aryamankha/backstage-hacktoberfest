import { useUser } from '../contexts/UserContext';

export default function Hero() {
  const { user } = useUser();
  const isAuthenticated = user.token ? true : false;
  const redirect = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : window.location.origin;
  const url = `https://ahsanwtc.eu.auth0.com/login?state=authorization-code&client=LpfwDeMU9OectsdzuYBroOVQmyuAU6wr&protocol=oauth2&response_type=code&redirect_uri=${redirect}&scope=openid%20profile%20email&audience=mongo-db-auth`;

  return (
    <div className="object-cover bg-[url('../public/images/artist-concert.jpg')] bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-16 w-7/12 text-white">
        <h1 className="self-center text-center font-bold drop-shadow-xl text-6xl">
          Be the first to discover a star. 
        </h1>
        <p className="self-center text-center drop-shadow-xl">
          <strong>246,900</strong> Users. <strong>3,904</strong> Artists.{" "}
          <strong>$3,800,000</strong> Market Value.
        </p>
        {!isAuthenticated && 
          <a href={url} className="text-[1.1rem] mx-[1rem] bg-[#485ED1] px-5 py-2 rounded-lg hover:bg-[#364aaf]">
            Sign Up
          </a>
        }
        
      </div>
    </div>
  );
}
