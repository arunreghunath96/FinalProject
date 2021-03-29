import React,{useState,useEffect} from 'react'
import Tableitems from './Tableitems'
import Medium from './Medium'
import High from './High'
import Low from './Low'
import Open from './Open'
import Closed from './Closed'
import './Tablestyle.css'
export default function Table() {
    const [posts,setposts]=useState([])
    useEffect(() => {
        const url='https://jsonplaceholder.typocode.com/posts';
        fetch(url).then(resp => resp.json())
        .then(resp=>setposts(resp))
    },[]
    )
    

    return (
        <div>
            
<table>

<tr>
  <th className="column margin">ID<FontAwesomeIcon  className="downicon"></FontAwesomeIcon></th>
  <th className="column">Request by<FontAwesomeIcon className="downicon"></FontAwesomeIcon> </th>
  <th className="column">Subject<FontAwesomeIcon className="downicon"></FontAwesomeIcon></th>  
  <th className="column"> Assignee<FontAwesomeIcon className="downicon"></FontAwesomeIcon></th>  
  <th className="column">Priority<FontAwesomeIcon className="downicon"></FontAwesomeIcon></th>   
  <th className="column">Status<FontAwesomeIcon className="downicon"></FontAwesomeIcon></th>
  <th className="column">Create Date<FontAwesomeIcon className="downicon"></FontAwesomeIcon></th>
  <th className="column"> Due Date<FontAwesomeIcon className="downicon"></FontAwesomeIcon></th> 
  <th className="column">Action<FontAwesomeIcon className="downicon"></FontAwesomeIcon></th>
</tr>
<br></br>
 
<Tableitems id={"#12345"} pic={"https://via.placeholder.com/600/24f355"} request={`${posts[0].name}`}  subject={'Support for theme'} assignee={"https://via.placeholder.com/600/24f355"} priority={<Medium/>} status={<Open/>} createDate={'01/01/2021'} dueDate={'31/01/2021'} />
<Tableitems id={"#12345"} pic={"https://via.placeholder.com/600/24f355"}request={'Jose.D'} subject={'Support for theme'} assignee={"https://via.placeholder.com/600/24f355"} priority={<Low/>} status={<Closed/>} createDate={'01/01/2021'} dueDate={'31/01/2021'} />
<Tableitems id={"#12345"} pic={"https://via.placeholder.com/600/24f355"}request={'Jose.D'} subject={'Support for theme'} assignee={"https://via.placeholder.com/600/24f355"} priority={<High/>} status={<Open/>} createDate={'01/01/2021'} dueDate={'31/01/2021'} />
<Tableitems id={"#12345"} pic={"https://via.placeholder.com/600/24f355"}request={'Jose.D'} subject={'Support for theme'} assignee={"https://via.placeholder.com/600/24f355"} priority={<Medium/>} status={<Closed/>} createDate={'01/01/2021'} dueDate={'31/01/2021'} />
<Tableitems id={"#12345"} pic={"https://via.placeholder.com/600/24f355"}request={'Jose.D'} subject={'Support for theme'} assignee={"https://via.placeholder.com/600/24f355"} priority={<Low/>} status={<Open/>} createDate={'01/01/2021'} dueDate={'31/01/2021'} />
<Tableitems id={"#12345"} pic={"https://via.placeholder.com/600/24f355"}request={'Jose.D'} subject={'Support for theme'} assignee={"https://via.placeholder.com/600/24f355"} priority={<High/>} status={<Closed/>} createDate={'01/01/2021'} dueDate={'31/01/2021'} />
<Tableitems id={"#12345"} pic={"https://via.placeholder.com/600/24f355"}request={'Jose.D'} subject={'Support for theme'} assignee={"https://via.placeholder.com/600/24f355"} priority={<Medium/>} status={<Closed/>} createDate={'01/01/2021'} dueDate={'31/01/2021'} />
<Tableitems id={"#12345"} pic={"https://via.placeholder.com/600/24f355"}request={'Jose.D'} subject={'Support for theme'} assignee={"https://via.placeholder.com/600/24f355"} priority={<Low/>} status={<Open/>} createDate={'01/01/2021'} dueDate={'31/01/2021'} />
<Tableitems id={"#12345"} pic={"https://via.placeholder.com/600/24f355"}request={'Jose.D'} subject={'Support for theme'} assignee={"https://via.placeholder.com/600/24f355"} priority={<High/>} status={<Closed/>} createDate={'01/01/2021'} dueDate={'31/01/2021'}  />

</table>
{/* {posts.map(post=>
    <div><p>{`${post.id}. ${post.title}`}</p></div>
    )} */}
        </div>
    )
}
