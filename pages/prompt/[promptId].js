import { getProduct } from '@/ApiRequests/explore';
import { getServerAuthSession } from '../api/auth/[...nextauth]';
import Head from 'next/head';
import PromptLayout from '@/layout/PromptLayout'
import { CldImage } from 'next-cloudinary';
import { MdDelete, MdModeEdit, MdOutlineCancel } from 'react-icons/md';
import { AiFillCopy, } from 'react-icons/ai';
import { IoIosShareAlt } from 'react-icons/io';
import { toast } from 'react-toastify';
import { AddEmotions, buyThePrompt,AddComment, GetComments, DeleteComments, UpdateComments } from '@/ApiRequests/user';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, Switch, Transition } from '@headlessui/react';
import {  BsFlag, BsThreeDotsVertical} from 'react-icons/bs';
import Link from 'next/link';
import moment from 'moment';
export default function Prompt({Header,session}){

  const router = useRouter();
  const [prompt,setprompt]=useState()
  const [loading,setLoading]=useState(true)
  const [threadId,setThreadId]=useState('')
  const isInitialMount = useRef(true);

  // Related to AddComments
  const  [comments,setComments]=useState();
  const [commentValue, setCommentValue] = useState('');

  useEffect(() => {
    if (isInitialMount.current) {
      // This code will run only on initial mount
      isInitialMount.current = false;
    } else {
      // This code will run on subsequent renders (e.g., when router.query changes)
      if (router.query.promptId === undefined) {
        return;
      }
      getProduct(router.query.promptId)
        .then((d) => {
          setprompt(d);
          console.log(d);
          setComments(d.commentId.comment)
          setThreadId(d.commentId._id)
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [router.query]);

  return (
    <PromptLayout>
      <Head>
      <title>{Header.name}</title>
        <meta name="description" content={Header.description} />
      </Head>
      {loading ? <Loader/> :
      <div className='flex justify-center '>
        <div className='mt-2 p-4 mx-auto rounded-xl '>
            <div className=' rounded-xl'>
              <CldImage src={prompt.images[0]}
              className=' rounded-xl '
              width={800}
              height={800}
              sizes="50w"
              crop=''
              alt={prompt.name}
              unselectable='off' 
              />
            </div>
        </div>
        <Sidebar 
        prompt={prompt} 
        session={session} 
        comments={comments}
        commentValue={commentValue}
        setCommentValue={setCommentValue}
        setComments={setComments}
        threadId={threadId}
        setThreadId={setThreadId}
        />
      </div>
      }
    </PromptLayout>
  )
}

const Sidebar  = ({prompt,session,comments,commentValue,setCommentValue,setComments,threadId,setThreadId }) => {
  const router = useRouter();
  return (
    <div className=' h-full z-10 md:block  bg-dark-light border-l border-dark-border hidden  max-w-sm overflow-hidden '>

      <div className='flex justify-between p-4 border-b border-dark-border '>
        <Link href={'/profile/'+prompt.vendorId.profileId.name}>
            <Avatar time={moment(prompt.createdAt).fromNow()} name={'Mohid Meer'}/>
        </Link>
        <div className='flex gap-4 items-center'>
          <Share />
          <Report/>
          <MdOutlineCancel onClick={()=>{router.back()}} className='text-2xl cursor-pointer'/>
        </div>
      </div>
      
      <div className=' h-full overflow-hidden  '>
          <Emotions  user_id={session ? session.user.id :'123'} p={prompt.EmotionNumbers} id={prompt._id} emotionsArray={prompt.EmotionId}  />
          <div className='p-4 bg-dark-background  text-dark-body flex flex-col gap-4'>
            <hr className=" relative text-center hr-text  -mx-4" data-content="Comments"/>
              <AddComments 
              setThreadId={setThreadId}
              session={session} 
              product_id={prompt._id}
              commentValue={commentValue}
              setCommentValue={setCommentValue}
              setComments={setComments}
              CommentsNumber={comments?.length}
              />
              <CommentsContainer session={session}  setComments={setComments} comments={comments} threadId={threadId} />
          </div>
          <hr className=" relative  text-center hr-text mt-4  -mx-4" data-content="Genaration Data"/>
          <div className='p-4 '>
            <PromptDescription description={prompt.description} />
            <PromptInstructions session={session} id={prompt._id}  purchased={prompt.isPurchased} instructions={prompt.instructions} />
          </div>
      </div>


    </div>
  )
}

const Share = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button >    
                <IoIosShareAlt className=" text-white rounded-full text-2xl"/>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment} 
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="
            absolute right-0  z-10
            mt-2 w-32  
            divide-y divide-dark-border
            text-gray-300   
            rounded-md 
            bg-dark-light  shadow-lg 
            ring-1 ring-black 
            ring-opacity-5 ">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button  onClick={()=>{navigator.clipboard.writeText(window.location.href);toast.info('Copied')}}
                      className={`${
                        active ? 'bg-dark-hover ' : ''
                      } group flex flex-col w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                     >
                       <AiFillCopy className="text-2xl"/> 
                      <span>Copy</span>
                    </button>
                  )}
                </Menu.Item>
              </div>             
            </Menu.Items>
          </Transition>
        </Menu>
  )
}

const Report =()=>{
  return(
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button >    
          <BsFlag className=" text-white  text-xl"/>
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="
      absolute right-0  z-10
      mt-2 w-32  
      divide-y divide-dark-border
      text-gray-300   
      rounded-md 
      bg-dark-light  shadow-lg 
      ring-1 ring-black 
      ring-opacity-5 ">
        <div className="px-1 py-1 ">
          <Menu.Item>
            {({ active }) => (
              <button  onClick={()=>{toast.info('Reported')}}
                className={`${
                  active ? 'bg-dark-hover ' : ''
                } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
               >
                <span>Mature Content</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button  onClick={()=>{toast.info('Reported')}}
                className={`${
                  active ? 'bg-dark-hover ' : ''
                } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
               >
                <span>TOS Violation</span>
              </button>
            )}
          </Menu.Item>
        </div>             
      </Menu.Items>
    </Transition>
  </Menu>
  )
}

const Avatar = ({time,name,flex,src='https://lh3.googleusercontent.com/a/AAcHTtfefauh4g1E36pf7scajv8IcTfWKziUCdajwWHjl8s8igc=s96-c'})=>{

  return (
    <div className={`flex items-center gap-2`}>
      <Image className=" rounded-full" alt='UserProfile' src={src} width={32} height={32}/>
    <div className={`text-dark-text ${flex ? 'flex items-center  gap-2 ' : ''} `}>
      <p className='text-sm font-bold'>{name}</p>
      <p className={`text-xs ${flex ? 'font-extralight ' : ''} `}>{time}</p>
    </div>
  </div>
  )
}

const AddComments = ({session,product_id,commentValue,setCommentValue,setComments,CommentsNumber,setThreadId}) => {

  const [loading,setLoading] = useState(false);
  const handleChange = (e) => {
    setCommentValue(e.target.value);
  };
  const handleCommentClick = async () => {
    setLoading(true)
     await AddComment(product_id,{comment:commentValue}).then(()=>{  
      FetchUpdatedComments();
      
    })
    
  };
  const FetchUpdatedComments =async()=>{
    const response = await GetComments(product_id)
    setComments(response.data.comments[0].comment)
    setLoading(false);
    setThreadId(response.data.comments[0]._id)
    setCommentValue('')
  }

  if (!session){
    return(
      <Link href='/login' 
      className='inline-flex w-full  
      justify-center rounded-md    
      bg-dark-border bg-opacity-20 px-4 py-2    
      text-sm font-medium    
      hover:bg-opacity-30   
      border border-dark-border'>
        Sign In
      </Link>
    )
  }
  
  

  return (
    <>
      <div className='flex items-start gap-2'>
        <Avatar/>
        <textarea
          value={commentValue}
          onChange={handleChange}
          type="text"
          className='input-box rounded-md resize-y border focus:outline-none focus:ring-2 focus:ring-blue-500'
          style={{ overflowY: 'hidden' }}
          placeholder={CommentsNumber ? 'Type your comment':'Be the first to comment' }
        />
      </div>
      <div className='flex justify-end '>
        <button
          onClick={handleCommentClick}
          className={`flex px-3 py-1 bg-blue-600 disabled:bg-dark-background disabled:border-dark-border disabled:border  text-white text-sm rounded font-bold ${!commentValue.trim() ? 'cursor-not-allowed' : ''}`}
          disabled={!commentValue.trim()}>
          {loading && <BtnLoader/> }
          Comment
        </button>
      </div>
    </>
  )
}


const UpdateComment = ({ commentId, content,setIsEdit,setComments,threadId }) => {

  const [updatedContent, setUpdatedContent] = useState(content);
  const [loading, setLoading] = useState(false);
  const [isContentChanged, setIsContentChanged] = useState(false);

  useEffect(() => {
    setIsContentChanged(updatedContent !== content);
  }, [updatedContent, content]);

  const handleChange = (e) => {
    setUpdatedContent(e.target.value);
  };

  const handleCommentUp = async () => {
    setLoading(true)
    const res = await UpdateComments(threadId,{messageId:commentId,newContent:updatedContent});
    setComments(res.data.comments.comment);
    setLoading(false)
    setIsEdit('')
  };

  return (
    <>
      <div className='flex items-start gap-2'>
        <Avatar />
        <textarea
          value={updatedContent}
          onChange={handleChange}
          type='text'
          className='input-box rounded-md resize-y border focus:outline-none focus:ring-2 focus:ring-blue-500'
          style={{ overflowY: 'hidden' }}
          placeholder='Type your comment'
        />
      </div>
      <div className='flex justify-end mt-4 gap-2'>
        <button
          onClick={()=>{setIsEdit('')}}
          className={`flex px-3 py-1 bg-red-600  text-white text-sm rounded font-bold `}
        >
          Cancel
        </button>
        <button
          onClick={handleCommentUp}
          className={`flex px-3 py-1 bg-blue-600 disabled:bg-dark-background disabled:border-dark-border disabled:border text-white text-sm rounded font-bold ${
            !updatedContent.trim() || !isContentChanged ? 'cursor-not-allowed' : ''
          }`}
          disabled={!updatedContent.trim() || !isContentChanged}
        >
          {loading && <BtnLoader />}
          Update
        </button>
      </div>
    </>
  );
}

const CommentsContainer=({comments,threadId,setComments,session})=>{

 return(
  <div className='flex flex-col gap-3'>
    {
      comments &&
      comments.slice().reverse().map((c, i) => (
        <SingleComment key={i} c={c} threadId={threadId} setComments={setComments} session={session}  />
      ))
    }

  </div>
 )

}


const SingleComment=({c,threadId,setComments,session})=>{
  const [edit,setIsEdit]=useState('');
  return(
    <div className='relative px-2'>
           { edit==='' ?<>
              <Avatar src={c.userId.avatar} flex={true} name={c.userId.name} time={moment(c.createdAt).fromNow()}/>
                  
              <p className='text-sm ml-10  text-dark-text'>
                {c.content}
              </p>     
              <div className='absolute right-0 top-2'>
              {
                c.userId._id ===session?.user.id && <EditCommentMenu setIsEdit={setIsEdit} commentId={c._id} threadId={threadId} setComments={setComments} />
              }

              </div>
              </> :
              <UpdateComment setIsEdit={setIsEdit}  content={c.content} threadId={threadId} commentId={c._id} setComments={setComments}  />
          }
      </div>
  );
}

const EditCommentMenu = ({commentId,setIsEdit,threadId,setComments}) => {
  const handleDeleteComment = async ()=>{
  
   const res = await DeleteComments(threadId,{messageId:commentId});
   setComments(res.data.comments.comment)
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button >    
          <BsThreeDotsVertical className=" text-white "/>
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="
      absolute right-0  z-10
      mt-2 w-32  
      divide-y divide-dark-border
      text-gray-300   
      rounded-md 
      bg-dark-light  shadow-lg 
      ring-1 ring-black 
      ring-opacity-5 ">
        <div className="px-1 py-1 ">
          <Menu.Item>
            {({ active }) => (
              <button  onClick={()=>{setIsEdit(commentId)}}
                className={`${
                  active ? 'bg-dark-hover ' : ''
                } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
               >
                <MdModeEdit className='text-xl'/>
                <span>Edit</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button  onClick={()=>{ handleDeleteComment() }}
                className={`${
                  active ? 'bg-dark-hover ' : ''
                } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
               >
                <MdDelete className='text-xl'/>
                <span>Delete</span>
              </button>
            )}
          </Menu.Item>
        </div>             
      </Menu.Items>
    </Transition>
  </Menu>


  );
}

const Emotions=({p,id,emotionsArray,user_id})=>{

  const [like,setLike]=useState(p.likes)
  const [dislike,setDislikes]=useState(p.dislikes)
  const [happy,setHappy]=useState(p.happy)
  const [sad,setSad]=useState(p.sad)
  const [favorite,setFavorite]=useState(p.favorites)

  const [isLiked,setIsLiked]=useState(emotionsArray.likes.includes(user_id))
  const [isDisliked,setIsDisliked]=useState(emotionsArray.dislikes.includes(user_id))
  const [isFav,setIsFav]=useState(emotionsArray.favorites.includes(user_id))
  const [isHappy,setIsHappy]=useState(emotionsArray.happy.includes(user_id))
  const [isSad,setIsSad]=useState(emotionsArray.sad.includes(user_id))


  const AddEmotionsToPrompt = async(e)=>{
    await AddEmotions(id,e).then((res)=>{
      switch(res.data.action){
        case 'LIKE' :
          if (res.status===201){
            setLike(like+1)
            setIsLiked(true)
          }else if(res.status===202){
            setLike(like-1)
            setIsLiked(false)
          }
        break;
        case 'DISLIKE' :
          if (res.status===201){
            setDislikes(dislike+1)
            setIsDisliked(true)
          }else if(res.status===202){
            setDislikes(dislike-1)
            setIsDisliked(false)
          }
        break;
        case 'FAVORITE' :
          if (res.status===201){
            setFavorite(favorite+1)
            setIsFav(true)
          }else if(res.status===202){
            setFavorite(favorite-1)
            setIsFav(false)
          }
        break;
        case 'HAPPY' :
          if (res.status===201){
            setHappy(happy+1)
            setIsHappy(true)
          }else if(res.status===202){
            setIsHappy(false)
            setHappy(happy-1)
          }
        break;
        case 'SAD' :
          if (res.status===201){
            setSad(sad+1)
            setIsSad(true)
          }else if(res.status===202){
            setSad(sad-1)
            setIsSad(false)
          }
        break;
        default:
          toast.error('Client Error')
        }
    
    })
  }

  return(
    <div className=" relative flex gap-7  text-sm p-4 border-b border-dark-border">
          <span className={`flex flex-col items-center gap-1 
          ${isFav ? 'bg-dark-muted hover:brightness-150' : 'hover:bg-dark-muted' }     px-2 rounded-md cursor-pointer`} 
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Favorite'})}}>
            <p className='text-red-500 text-2xl'>❤</p>
            <p>{favorite} </p>
          </span>
          <span className={`flex flex-col items-center gap-1 
           ${isLiked ? 'bg-dark-muted hover:brightness-150' : 'hover:bg-dark-muted' }     px-2 rounded-md cursor-pointer`} 
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Like'})}}>
            <p className='text-2xl'>👍</p>
            <p>{like}</p>
          </span>
          <span className={`flex flex-col items-center gap-1 
          ${isDisliked ? 'bg-dark-muted hover:brightness-150' : 'hover:bg-dark-muted' }     px-2 rounded-md cursor-pointer`} 
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Dislike'})}}>
            <p className='text-2xl'>👎</p>
            <p>{dislike}</p>
          </span>
          <span className={`flex flex-col items-center gap-1  
          ${isHappy ? 'bg-dark-muted hover:brightness-150' : 'hover:bg-dark-muted' }     px-2 rounded-md cursor-pointer`} 
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Happy'})}}>
            <p className='text-2xl'>😂</p>
            <p>{happy}</p>
          </span>
          <span className={`flex flex-col items-center gap-1 
           ${isSad ? 'bg-dark-muted hover:brightness-150' : 'hover:bg-dark-muted' }     px-2 rounded-md cursor-pointer`} 
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Sad'})}}>
            <p className='text-2xl'>😥</p>
            <p>{sad}</p>
          </span>
        </div>
)}

const PromptDescription=({description})=>{
  return(
  <div className=''>
    <p className='text-dark-text '>Description</p>
     <div className='bg-dark-border rounded-md text-sm  font-mono  max-h-[400px] overflow-y-auto p-2 mt-2 '>
         {description}
     </div>
  </div>
)}

const PromptInstructions=({session,id,purchased,instructions})=>{
  const router = useRouter();
  const Buy = async ()=>{
    if (session===null){
      toast.warn('You must login to purchase')
       return router.push('/login')
    }
   const st=  await buyThePrompt({id:id})
   window.location.href=st
  }
 return(
  <div className='mt-4 relative'>
    <div className='flex justify-between items-center'>
    <p className='text-dark-text '>Instructions</p>
      {purchased && <AiFillCopy className='cursor-pointer ' onClick={()=>{navigator.clipboard.writeText(instructions);toast.info('Copied')}}/> }
    </div>
    {purchased ? <div className='bg-dark-border rounded-md text-sm  font-mono  max-h-[300px] overflow-y-auto p-2 mt-2 mb-4   select-none '>{instructions}</div> :
        <>
            <div className='bg-dark-border rounded-md text-sm  font-mono  max-h-[300px] overflow-y-auto p-2 mt-2 mb-4 blur-sm  select-none '>
            Lorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum i and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typunchain the 1ntaining Loremgre recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <button className='btn  rounded-md  absolute top-[30%] left-[25%] mx-auto  z-10' onClick={()=>{Buy()}}>
                      Get This Prompt
            </button>
        </>
    }
    <div className='h-[150px]'></div>
</div>
 )
}



function Loader() {
  return (
    <PromptLayout>
    </PromptLayout>
  )
}


function BtnLoader(){

  return(
    <svg aria-hidden="true" className="w-4 h-4 mt-[2px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
  )
}













export async function getServerSideProps(context) {
  const { params } = context;
  const Header = await getProduct(params.promptId);
  let session = await getServerAuthSession(context.req, context.res)

  if (!Header) {
    return {
      notFound: true,
    };
  }
  session=JSON.parse(JSON.stringify(session))
  return {
    props: {
      Header,session
    },
  };
}