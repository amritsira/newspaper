import React,{useState, useEffect} from 'react'
import Newsitem from './Newsitem';
import {articles} from '../data';
// https://gnews.io/api/v4/search?q=india&lang=hi&token=8cc43b12ac9ecf8f6098f26ebc1db042
let GLOBLE_ID = 1;
const Newslist = () => {

 const[newsdata , setNewsdata] = useState([{}]); 


  async function getdefaultNews(lang){
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?lang=${lang}&token=8cc43b12ac9ecf8f6098f26ebc1db042`);
    const data = await response.json();
    setNewsdata(data.articles);
  }

  useEffect(()=>{
     getdefaultNews('en');
  },[])
  

  function handleLanguagechanger(e){
    let language = e.target.lang;
    getdefaultNews(language);
  }



  return (

    <>
        <button className="btn btn-primary" data-testid='lang-en' lang="en" onClick={handleLanguagechanger}>ENGLISH</button>
        <button className="btn btn-success" data-testid='lang-hi' lang="hi" onClick={handleLanguagechanger}>HINDI</button>

        <div className='container news-info'>
        {   
            
            newsdata.map((item)=>{
                return(
                    <Newsitem item={item} key={GLOBLE_ID++}/>
                )
            })
        }
        </div>
    </>
  )
}

export default Newslist
