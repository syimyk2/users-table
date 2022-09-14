import React from 'react'
import { useSelector } from 'react-redux'
import { TableHeadItem } from './TableHeadItem'

export const TableHead = ()=>{
    const {columnInfo} = useSelector(state=>state.contact)

    return(
        <>
        {columnInfo.slice(0, 3).map((item)=><TableHeadItem key={item.id} thItem={item}/>)}
        </>

    )
}
