import React from 'react';
import { ScrollView } from 'react-native';



function MessageList({messageTexts,userName,roomId}) {
  
  const msgs = [
      {
          name:'Anwar',
          id:1,
          msg:'hello'
      },
      {
        name:'Zineb',
        id:1,
        msg:"Hi I,dampressing objects: 100% (6/6), done. Writing objects: 100% (6/6), 1.01 KiB | 1.01 MiB/s, done.Total 6 (delta 4), reused 0 (delta 0)remote: Resolving deltas: 100% (4/4), completed with 4 loca"

    },
    {
        name:'Anwar',
        id:2,
        msg:'hello'
    },
    
  ]
  return 
  (
    <ScrollView >
        {msgs.map((msg,index)=>{
            
        })}
    </ScrollView>
  )
}



export default MessageList