import React from 'react'

const ProfileUser = () => {
  const userData = {
    name: 'David Lipman',
    username : '@dlip',
    collections: 38,
    fans: 931,
    bio: 'Here’s my bio! I’m really cool so buy my stuff. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum purus, pharetra nec lacus et, auctor finibus nisl. Etiam sollicitudin urna eu porttitor sagittis. Integer consequat lobortis cursus. Sed eu nisl sit amet erat ullamcorper convallis. Quisque pellentesque, dui vitae porta feugiat, lacus metus fermentum ante, a tincidunt mauris neque at metus.',
  }
  return (
    <div className="flex flex-col justify-center text-center">
      <div className = "object-cover bg-[url('../public/images/artist-concert.jpg')] bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center h-[269px]">
      <button className="self-center text-center py-0.5 rounded bg-blue-700 px-2.5">
        Follow
      </button>
      </div>
      <div className = "flex flex-row justify-around">
            <div className="w-[444px] h-[1000px] bg-[#26282E] text-white text-left px-12 d flex flex-col">
                  <div>
                    <h2 className="text-4xl mt-32">{userData.name}</h2>
                    <h5 className="text-xl font-extralight">{userData.username}</h5>
                  </div>
              <div className = 'flex flex-row gap-10 justify-center mt-16'>
                  <div className = 'flex flex-col gap-2 text-center'>
                      <h2 className="text-4xl">{userData.collections}</h2>
                      <h2 className="text-2xl font-extralight">Collections</h2>
                  </div>
                  <div className = "flex flex-col gap-2 text-center">
                    <h2 className="text-4xl ">{userData.fans}K</h2>
                    <h5 className="text-2xl font-extralight">Fans</h5>
                  </div>
              </div>
            
                      <div className = 'flex flex-col mt-16 text-left gap-4'>
                        <h3 className="text-3xl font-extralight">Bio</h3>
                        <p>
                        Here’s my bio! I’m really cool so buy my stuff. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum purus, pharetra nec lacus et, auctor finibus nisl. Etiam sollicitudin urna eu porttitor sagittis.
                
                        Integer consequat lobortis cursus. Sed eu nisl sit amet erat ullamcorper convallis. Quisque pellentesque, dui vitae porta feugiat, lacus metus fermentum ante, a tincidunt mauris neque at metus.
                        </p>
                      </div>
               
            
            <div>
                <div className = 'flex flex-col mt-16'> 
                     <h3 className="text-3xl font-extralight">Community</h3>
                <div className="flex gap-8" >
                     <button className="border-2 rounded-xl w-[70px] pb-16 mt-4"></button>
                     <button className="border-2 rounded-xl w-[70px] pb-16 mt-4"></button>
                     <button className="border-2 rounded-xl w-[70px] pb-16 mt-4"></button>
                </div>
                
                  </div>
            </div>
            </div>
          <div className="bg-white text-black w-3/4">
           <div className = "flex flex-row justify-around py-4 border-b-2">
             <button className="text-xl border-b-8 border-b-[#485ED1]">My Story</button>
             <button className="text-xl">Collections</button>
           
           
           </div>
          </div>
          </div>
    </div>
  )
}

export default ProfileUser