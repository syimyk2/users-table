import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Contacts } from "./components/table"
import { getContacts } from "./store/users-slice";
  const columnInfo =[
     {
      heading: 'Full Name',
      key: 'name',
     } 
     ,{
      heading: 'User Name',
      key: 'username',
     },
     {heading: 'Number',
     key: 'phone',
   },
   {
      heading: 'Email',
      key: 'email',
   },
   {
      heading: 'Website',
      key: 'website',
   },
   {
   heading: 'Address',
   key: 'address.street'
   }
]
function App() {
   const dispatch = useDispatch()
   const contacts = useSelector(state => state.contact.contacts)
   console.log(contacts);

   useEffect(() => {
      dispatch(getContacts())
   }, []);

 
   return (
      <div className="App">
        <Contacts dataTable={contacts} columnInfo={columnInfo} />
      </div>
   )
}

export default App
