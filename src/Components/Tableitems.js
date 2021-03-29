import React from 'react'
import {Avatar} from '@material-ui/core'

import './Tableitems.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Tableitems(props) {
    return (
        
        
            <tr className="rows">
                
  <td className="idmargin">{props.id}</td>
  <td className="d-flex  align-items-center "><Avatar className="mr-3" alt="Remy Sharp" src={props.pic}/>{props.request}</td>
  <td>{props.subject}</td>
  <td className="avatar"><Avatar alt="Remy Sharp" src={props.assignee} /></td>
  <td>{props.priority}</td>
  <td>{props.status}</td>
  <td className="datecolor">{props.createDate}</td>
  <td>{props.dueDate}</td>
  <td className="dot">...</td>
</tr>
       
    )
}
