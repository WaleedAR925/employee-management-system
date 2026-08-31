import React from 'react'
import AcceptTask from './AcceptTask'
import Newtask from './Newtask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div  id='tasklist' className='h-[50%] w-full  mt-5 flex items-center justify-start flex-nowrap p-5 gap-5 overflow-x-auto'>
       {data.tasks.map((e,idx)=>{
        if(e.active){
          return <AcceptTask key={idx}/>
        }
        if(e.completed){
          return <CompleteTask key={idx}/>
        }
        if(e.Newtask){
          return <Newtask key={idx}/>
        }
        if(e.failed){
          return <FailedTask key={idx}/> 
        }

       })}
    </div>
  )
}

export default TaskList
