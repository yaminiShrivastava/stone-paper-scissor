import './App.css';
import { GiFist } from "react-icons/gi";
import { FaHandPaper,FaHandPeace,FaFistRaised } from "react-icons/fa";
import {  useState } from 'react';
function App() {
  const[myScore,setMyScore]=useState(0);
  const[compScore,setCompScore]=useState(0);

  const [record,setrecord]=useState(false);

  const[mynumb,setMyNumb]=useState(-1);
  const[compNumb,setCompNumb]=useState(-1);

const comp=()=>setCompNumb(Math.floor(Math.random() * 3))

const score=()=>{
  if(mynumb!==compNumb){
    if(mynumb===0){
      if(compNumb===1)setCompScore(compScore+1)
      else if(compNumb===2)setMyScore(myScore+1);
    }
    if(mynumb===1){
      if(compNumb===0)setMyScore(myScore+1);
      else if(compNumb===2)setCompScore(compScore+1)
    }
    if(mynumb===2){
      if(compNumb===1)setMyScore(myScore+1);
      else if(compNumb===0)setCompScore(compScore+1)
    }
  }
}

  
  return (
    <>
    <div className='heading'>
      <h1>Welcome!!</h1>
      <h2>Stowne Paeper Swisssorr </h2>
    </div>
      <div className='start' onClick={()=>{setrecord(true)}} >Start</div>
      <div className='reset' onClick={()=>{setCompScore(0);setMyScore(0)}} >Reset</div>
    <div className='Box  '>
      <div className='game  '>
        <div className='Score'>{`Score : ${compScore} / ${myScore}`} </div>
        <div className='players'>
          <div className='comp  '>
            <div className={record===false?'icon abc ':'icon shaky abc'}>{
              (record===true||compNumb===-1)?<GiFist/>:compNumb===0?<FaFistRaised/>:compNumb===1?<FaHandPaper/>:<FaHandPeace/>
            }</div>
            <div className='name '>Computer</div>
          </div>
          <div className='me  '>
            <div className={record===false?'icon mirror def':'icon shaky mirror def'}>{
              (record===true||mynumb===-1)?<GiFist/>:mynumb===0?<FaFistRaised/>:mynumb===1?<FaHandPaper/>:<FaHandPeace/>
            }</div>
            <div className='name '>You</div>
          </div>
        </div>
    </div>

      <div className='options   '>
        <div className={record===true?'scissor':'scissor disabled'} onClick={()=>{
          setMyNumb(0);setrecord(false);comp();score();}}>
          <div className='optionicon'><FaFistRaised/></div>
          <div className='desc'>Rock</div>
        </div>

        <div className={record===true?'scissor':'scissor disabled'} onClick={()=>{setMyNumb(1)
        setrecord(false);comp();score();}}>
          <div className='optionicon'><FaHandPaper/></div>
          <div className='desc'>paper</div>
        </div>

        <div className={record===true?'scissor':'scissor disabled'}  onClick={()=>{setMyNumb(2)
        setrecord(false);comp();score();}}>
          <div className='optionicon'><FaHandPeace/></div>
          <div className='desc'>Scissor</div></div>
      </div>
    </div>

    {/* {`${compNumb} - ${mynumb}   ${record}`}<br/>
    {`${compScore} - ${myScore}  `} */}
    </>
  );
}

export default App;