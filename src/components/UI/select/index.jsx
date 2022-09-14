import React from 'react'
import Select from 'react-select/dist/declarations/src/Select'
import { columnInfo } from '../../../App'

export const  index  = () => {
  return (
    <Select
    className="basic-single"
    classNamePrefix="select"
    defaultValue={columnInfo[0]}
    // isDisabled={isDisabled}
    // isLoading={isLoading}
    // isClearable={isClearable}
    // isRtl={isRtl}
    // isSearchable={isSearchable}
    name="color"
    options={columnInfo}
  />
  )
}
