import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const Prompts = () => {
    const [section, setSection] = useState('featured')
    return (
      <div>
        <div className="flex justify-start gap-x-5 lg:flex-row flex-col ">
          <h2 className="lg:text-3xl md:text-2xl text-lg font-bold">Prompts</h2>
          
          <RadioGroup as='div' className={'flex justify-between p-1 border border-dark  justify-items-center mt-1 rounded-full  '}  value={section} onChange={setSection}> 
        
          <RadioGroup.Option value="featured">
          {({ checked }) => (
            <span className={`text-sm font-bold px-4 py-1 rounded-full ${checked ? 'bg-green' : ''}`}>Featured</span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="hotest">
          {({ checked }) => (
            <span className={`text-sm font-bold px-4 py-1 rounded-full  ${checked ? 'bg-green' : ''}`}>Hotest</span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="latest">
          {({ checked }) => (
            <span className={`text-sm font-bold px-4 py-1 rounded-full  ${checked ? 'bg-green' : ''}`}>Latest</span>
          )}
        </RadioGroup.Option>
          </RadioGroup>
        
           
        </div>
  
        {section=='featured'?<Featured/> : ''}
        {section=='hotest' ?<Hotest/> : ''}
        {section=='latest' ?<Latest/> : ''}
  
  
     
  
      </div>
    )
}

export default Prompts





const Featured = () => {
    return (
      <div className='grid mt-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-7 gap-2'>
      
          <Item src='/images/prompt.webp' name='Tiny Models' type={'Featured'} />
          <Item src='/images/prompt.webp' name='Tiny Models' type={'Featured'} />
          <Item src='/images/prompt.webp' name='Tiny Models' type={'Featured'} />
          <Item src='/images/prompt.webp' name='Tiny Models' type={'Featured'} />
          <Item src='/images/prompt.webp' name='Tiny Models' type={'Featured'} />
          <Item src='/images/prompt.webp' name='Tiny Models' type={'Featured'} />
         
      </div>
    )
  }

const Hotest = () => {
    return (
      <div className='grid mt-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-7 gap-2'>
          <Item src='/images/prompt2.webp' name='RPG Game Assets' type={'Hotest'} />
          <Item src='/images/prompt2.webp' name='RPG Game Assets' type={'Hotest'} />
          <Item src='/images/prompt2.webp' name='RPG Game Assets' type={'Hotest'} />
          <Item src='/images/prompt2.webp' name='RPG Game Assets' type={'Hotest'} />
          <Item src='/images/prompt2.webp' name='RPG Game Assets' type={'Hotest'} />
          <Item src='/images/prompt2.webp' name='RPG Game Assets' type={'Hotest'} />
      </div>
    )
  }

const Latest = () => {
    return (
      <div className='grid mt-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-7 gap-2'>
      
      <Item src='/images/prompt3.webp' name='Spooky Game Assets' type={'Latest'} />
          <Item src='/images/prompt3.webp' name='Spooky Game Assets' type={'Latest'} />
          <Item src='/images/prompt3.webp' name='Spooky Game Assets' type={'Latest'} />
          <Item src='/images/prompt3.webp' name='Spooky Game Assets' type={'Latest'} />
          <Item src='/images/prompt3.webp' name='Spooky Game Assets' type={'Latest'} />
          <Item src='/images/prompt3.webp' name='Spooky Game Assets' type={'Latest'} />
      </div>
    )
  }


  const Item = ({src,name,type}) => {
    return (
  
      <Link className="" href={''} >
        <div class="relative rounded-xl bg-dark p-1 border border-dark-2 overflow-hidden">
        <Image
            draggable="false"
            loading="lazy"
            class="  rounded-xl"
            src={src} width={300}  height={200}      />
          
          <div class="w-full text-sm  flex flex-col items-center rounded-b-xl ">
            <span class="text-white-1">{name}</span>
            <span class="text-greenflex items-center space-x-2 text-xs">
              <span>Star Atlas: CORE Epi...</span>
            </span>
            <div class="bg-dark-2 text-xs py-1 px-2 mt-3 text-white space-x-2">
              <span class="text-green font-bold">{type}</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }