import React from 'react'
import styled from 'styled-components'
import { TableHead } from './TableHead'
import { TableRowItem } from './TableRowItem'

export const Contacts = ({dataTable, columnInfo}) => {
  return (
    <StyledTable>
        <thead>
            <tr>
            <TableHead />
            </tr>
        </thead>
        <tbody>
            {dataTable.map((tableItem)=><TableRowItem key={tableItem.id} tableItem={tableItem}   />)}
          
        </tbody>
    </StyledTable>
  )
}
  

const StyledTable = styled.table`
    background-color: aliceblue;
    border-collapse: collapse;
    max-width: 900px;
    width: 100%;
    margin: 2rem auto;
    th, td {
        border: 1px solid #ddd;
        padding: 1rem;
        text-align: center;
    }
`
