import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { contactsActions } from '../../store/users-slice'
import { options } from '../../utils/helpers/data'

export const TableHeadItem = ({thItem}) => {
   const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(false)
  const [defaultHeading, setHeading] = useState()
  const {selectedValues}= useSelector(state=>state.contact)

  const onShowSelect =(selectedHeading)=>{
    setHeading(selectedHeading)
     setIsVisible(true)
    }
  const selectedHandler = (selected)=> {
    dispatch(contactsActions.getSelectedValues({ selected, defaultHeading}))
  }
  useEffect(() => {
    if(selectedValues){
       setIsVisible(false)
    }
    return ()=>{
      dispatch(contactsActions.clearSelectedHeading())
    }
     
  }, [selectedHandler, selectedValues]);


  return (
    <th
     onClick={()=>onShowSelect(thItem.key)}
     key={thItem.key}>
     {isVisible?  <Select
    className="basic-single"
    classNamePrefix="select"
    defaultValue={null}
    onChange={selectedHandler}
    name="option"
    options={options} /> : <span>{thItem.heading}</span>}
     </th>
  )
}
