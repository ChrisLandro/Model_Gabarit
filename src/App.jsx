import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Page404/>} />
        {/* pouvez mettre plusieurs "Route"
        <Route ... />}
        <Route ... />}
        <Route ... /> */}
      </Routes>
    </Router>
  )
}

export default App