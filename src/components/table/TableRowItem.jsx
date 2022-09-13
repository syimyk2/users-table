import React from 'react'

export  const TableRowItem =({tableItem, columnInfo})=>(

    <tr>
         {columnInfo.map((columnInfoItem, index)=> {
            if(columnInfoItem.key.includes('.')){
                const itemSplit = columnInfoItem.key.split('.')
                console.log(tableItem[itemSplit[0]][itemSplit[1]]);
                return <td>{tableItem[itemSplit[0]][itemSplit[1]]}</td>  
            }
          
           return <td key={columnInfoItem.key} >{tableItem[`${columnInfoItem.key}`]}</td>
         })}
   </tr>
) 
