import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AuthHomePage from "./pages/AuthHomePage";
import { useState, useEffect } from 'react';
import HomePage from "./pages/HomePage";
import JournalEntries from "./pages/JournalEntries";


function App() {
  const [token, setToken] = useState();
  const invalidateToken = () => {
    setToken(false)
  }
  const [journalEntries, setJournalEntries] = useState([])
  // const [newJournalEntry, setNewJournalEntry] = useState([])
  // setJournalEntries[...journalEntries, newEntry]

  // fetch all entries
  useEffect(() => {
    const fetchEntries = async () => {
    const res = await fetch('/entry/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `token ${token}`
        },
    })
    const data = await res.json()
    {(data.length <= 1) ? 
      setJournalEntries(data) : setJournalEntries([...data])}
    return data
    }
    if (token){fetchEntries()}
  }, [token])
  
//  Post new journal entry
 async function addEntry(entry, token) {
  return fetch('/entry/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${token}`,
      'title': `${entry.title}`,
      'body': `${entry.body}`,
      'prompt': `${(prompt) ? prompt : null}`
    },
    body: JSON.stringify(entry)
  })
    .then(data => data.json())
  }


  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     username,
  //     password
  //   });
  // }
  // addentry
//  const addEntry=async ()=>{
//   const res = await fetch('/entry/', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       'Authorization': `token ${token}`
//     },
//     body: JSON.stringify(credentials)
// })
//  }

  return (
    <Router>
      <Switch>
        <Route path="/browse-journal">
          <JournalEntries
          journalEntries={journalEntries}
          
          />
        </Route>

        <Route path="/browse-moments">
        <h1>Hello World</h1>
        </Route>
        
        <Route path="/">
        {!token ? 
        <HomePage
        setToken = { setToken }
        /> : 
        <AuthHomePage
        invalidateToken = { invalidateToken }
        addEntry = {addEntry}
        />}
        </Route>
      </Switch>

    </Router>

   
  );
}

export default App;
