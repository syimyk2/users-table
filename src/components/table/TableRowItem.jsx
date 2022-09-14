import React from 'react'
import { useSelector } from 'react-redux' 

export  const TableRowItem =({tableItem})=>{
 const {selectedValues, columnInfo} = useSelector((state)=>state.contact)


  return(  <tr>
         {columnInfo.slice(0, 3).map((columnInfoItem, index)=> {
            if(columnInfoItem.key.includes('.')){
                const itemSplit = columnInfoItem.key.split('.')
               
                return <td>{tableItem[itemSplit[0]][itemSplit[1]]}</td>  
            }else if(selectedValues !== null){

                return <td key={columnInfoItem.id} >{tableItem[`${columnInfoItem.key}`]}</td>
            }
          
           return <td key={columnInfoItem.id} >{tableItem[`${columnInfoItem.key}`]}</td>
         })}
   </tr>)
}
