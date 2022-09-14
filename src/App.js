import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Contacts } from "./components/table"
import { getContacts } from "./store/users-slice";

function App() {
   const dispatch = useDispatch()
   const contacts = useSelector(state => state.contact.contacts)

   useEffect(() => {
      dispatch(getContacts())
   }, []);


   return (
      <div className="App">
        <Contacts dataTable={contacts} />
      </div>
   )
}

export default App
