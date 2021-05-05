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
  
  const updFrontEndJournals = (withNewEntry) => {
    setJournalEntries(withNewEntry)
  }

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
    console.log(data)
    return data
    }
    if (token){fetchEntries()}
  }, [token])


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
        token = {token}
        updFrontEndJournals = {updFrontEndJournals}
        />}
        </Route>
      </Switch>

    </Router>

   
  );
}

export default App;
