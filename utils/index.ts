export const getCode = (query:string) => {
  /* match: state= */
  let regex = /\A?state=[^&]+&*/i;
  
  /* '?code=6JGVCPvJjlwpEe1KD-H9LH782kixID9lI6EEnD9VXE2J9&state=authorization-code' */
  const match = query.match(regex);
  console.log({match});
  
  /* if there is a match for state */
  if (match) {
    const matchArray = match[0].split('=');
    if (matchArray[0] === 'state' && matchArray[1] === 'authorization-code') {
      
      /* get authorization code from the url */
      /* match: state= */
      regex = /\A?code=[^&]+&*/i;
      const codeMatch = query.match(regex);
      console.log({codeMatch});

      /* if there is a match for code */
      if (codeMatch) {
        const codeArray = codeMatch[0].split('=');
        if (codeArray[0] === 'code') {
          const code = codeArray[1];
          return code;
        }
      }
    }
  }

  return null;
};

/* use code to get auth token */
export const getAuthToken = async (code:string) => {
  const authBase = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://backstage-hacktoberfest-service.vercel.app';
  try {
    const response = await (await fetch(`${authBase}/api/auth/request-tokens?code=${code}`)).json();
    const { error, access_token } = response;
    if (error) {
      console.log(error);
      return null;
    }
    return access_token;
  } catch (error) {
    console.log(error);
  }

  return null;


};