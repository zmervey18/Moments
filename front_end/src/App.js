import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AuthHomePage from "./pages/AuthHomePage";
import { useState, useEffect } from 'react';
import HomePage from "./pages/HomePage";
import BrowseMoments from "./pages/BrowseMoments";
import JournalEntries from "./pages/JournalEntries";


function App() {
  const [token, setToken] = useState();
  const invalidateToken = () => {
    localStorage.removeItem('moments_token')
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
    setJournalEntries([...data])
    // console.log(data)
    return data
    }
    if (token){fetchEntries()}
  }, [token])

  //  Post new journal entry
  const [title, setTitle] = useState();
  const [body, setBody] = useState(); 
  const addEntry = async (e) => {
      e.preventDefault();
      // Add entry to database
      const res = await fetch('/entry/', {
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`
       },
        body: JSON.stringify({ 
          title: `${title}`,
          body: `${body}`,
          // prompt: `${prompt ? prompt : null}`
        }),
      })
      const data = await res.json()
      if (res.status === 201) {
          setJournalEntries([...journalEntries, data])
      }
  }
  const deleteEntry = async (id) => {
    const res = await fetch(`/entry/${id}/`, {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `token ${token}`
   }
    })
    if (res.status === 204) {
      // UI
      setJournalEntries(journalEntries.filter((e) => e.pk !== id))
    }
  }
  return (
    <Router>
      <Switch>
        <Route path="/browse-journal">
          {!token ?
          "Log in"
          :
          <JournalEntries
          journalEntries={journalEntries}
          onDelete={deleteEntry}
          invalidateToken = {invalidateToken}
          />
          }
        </Route>

        <Route path="/browse-moments">
          <BrowseMoments 
          invalidateToken = {invalidateToken}
          />
        </Route>
        
        <Route path="/">
        {!token ? 
        <HomePage
        setToken = { setToken }
        /> : 
        <AuthHomePage
        token = {token}
        invalidateToken = { invalidateToken }
        addEntry = { addEntry }
        onTitleChange={setTitle}
        onBodyChange={setBody}
        />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
