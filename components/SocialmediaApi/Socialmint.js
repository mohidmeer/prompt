import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaPinterest, FaReddit, FaTelegram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { toast } from 'react-toastify';


const Socialmint = () => {
  return (
    <div id='SocialMintShare'>
     <h2 className={` text-4xl text-center  font-bold `}>Social Accounts</h2>
    <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mt-4'>
        <Facebook/>
        <Twitter/>
        <Instagram/>
        <Pintrest/>
        <Reddit/>
        <Telegram/>
        <Discord/>
    </div>
    <h2 className='text-xl text-center font-bold text-gray-700 mt-4 '>Link your account to automatically post</h2>
</div>
  )
}

export default Socialmint


const Telegram = () => {
    const notify = () => toast("Linking Telegram");
    return (
  <div onClick={notify} className= 'shadow-xl rounded-lg bg-white  font-bold p-2 text-center     '>
        <p className=' text-sm border border-black  inline-block p-1 rounded-full  '>Click To Link </p>
        <div className='flex justify-center mt-2 border-dotted  border-b-2  border-black  '>
        <FaTelegram  className='text-telegram text-4xl mb-2 ' />
        </div>
        <div className='flex justify-center mt-8 '>
          <FaTelegram  className='text-telegram border-4 rounded-full text-6xl mb-2 ' />
        </div>
    
      </div>
        )
  }
  const Discord = () => {
    const notify = () => toast("Linking Discord");
    return (
  <div onClick={notify} className= 'shadow-xl rounded-lg bg-white  font-bold p-2 text-center     '>
        <p className='border border-black text-sm  inline-block p-1 rounded-full  '>Click To Link </p>
        <div className='flex justify-center mt-2 border-dotted  border-b-2  border-black  '>
        <FaDiscord  className='text-discord text-4xl mb-2 ' />
        </div>
        <div className='flex justify-center mt-8 '>
          <FaDiscord  className='text-discord border-4 rounded-full text-6xl mb-2 ' />
        </div>
    
      </div>
        )
  }
const Reddit = () => {
    const notify = () => toast("Linking Reddit");
    return (
  <div onClick={notify} className= 'shadow-xl rounded-lg bg-white  font-bold p-2 text-center     '>
        <p className='text-sm border border-black  inline-block p-1 rounded-full  '>Click To Link </p>
        <div className='flex justify-center mt-2 border-dotted  border-b-2  border-black  '>
        <FaReddit  className='text-reddit text-4xl mb-2 ' />
        </div>
        <div className='flex justify-center mt-8 '>
          <FaReddit  className='text-reddit border-4 rounded-full text-6xl mb-2 ' />
        </div>
    
      </div>
        )
  }


const Pintrest = () => {
    const notify = () => toast("Linking Pintrest");
    return (
  <div onClick={notify} className= 'shadow-xl rounded-lg bg-white  font-bold p-2 text-center     '>
        <p className='text-sm border border-black  inline-block p-1 rounded-full  '>Click To Link </p>
        <div className='flex justify-center mt-2 border-dotted  border-b-2  border-black  '>
        <FaPinterest  className='text-pintrest text-4xl mb-2 ' />
        </div>
        <div className='flex justify-center mt-8 '>
          <FaPinterest  className='text-pintrest border-4 rounded-full text-6xl mb-2 ' />
        </div>
    
      </div>  )
  }
  


const Instagram = () => {
    const notify = () => toast("Linking Instagram");
    return (
      <div onClick={notify} className= 'shadow-xl rounded-lg bg-white  font-bold p-2 text-center     '>
      <p className='text-sm border border-black  inline-block p-1 rounded-full  '>Click To Link </p>
      <div className='flex justify-center mt-2 border-dotted  border-b-2  border-black  '>
      <FaInstagram  className='text-instagram text-4xl mb-2 ' />
      </div>
      <div className='flex justify-center mt-8 '>
        <FaInstagram  className='text-instagram border-4 rounded-full text-6xl mb-2 ' />
      </div>
  
    </div>
    )
  }


const Facebook = () => {

  const notify = () => toast("Linking Facebook");
  return (
    <div onClick={notify} className='shadow-xl rounded-lg bg-white  font-bold p-2 text-center'>
      <p className=' text-sm border border-black  inline-block p-1 rounded-full  '>Click To Link </p>
      <div className='flex justify-center mt-2 border-dotted  border-b-2  border-black  '>
      <FaFacebook  className='text-facebook text-4xl mb-2 ' />
      </div>
      <div className='flex justify-center mt-8 '>
        <FaFacebook  className='text-facebook border-4 rounded-full text-6xl mb-2 ' />
      </div>
  
    </div>
  )
}



const Twitter = () => {
  const notify = () => toast("Linking Twitter");
  return (
<div onClick={notify} className= 'shadow-xl rounded-lg bg-white  font-bold p-2 text-center     '>
      <p className=' text-sm border border-black  inline-block p-1 rounded-full  '>Click To Link </p>
      <div className='flex justify-center mt-2 border-dotted  border-b-2  border-black  '>
      <FaTwitter  className='text-twitter text-4xl mb-2 ' />
      </div>
      <div className='flex justify-center mt-8 '>
        <FaTwitter  className='text-twitter border-4 rounded-full text-6xl mb-2 ' />
      </div>
  
    </div>  )
    
}