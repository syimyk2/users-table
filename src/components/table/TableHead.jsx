import React, { useState } from 'react'

export const TableHead = ({columnInfo})=>{
    const [isVisbleSelect, setVisibleSelect] = useState(false)
    const showColumnVariantsHandler =(selectedItem)=>{
        alert(selectedItem)
    }

    return(<>{columnInfo?.map((item)=><th onClick={()=>showColumnVariantsHandler(item.key)} key={item.key}>{item.heading}</th>)}</>)
}
