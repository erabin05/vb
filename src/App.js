import { useEffect, useState } from 'react'
import axios from 'axios'

import Employee from './Components/Employee'
import './App.css'

const useEmployees = () => {
  const [ employees, setEmployees ] = useState([])

  const url = `https://my.api.mockaroo.com/employee.json?key=${process.env.REACT_APP_API_KEY}`
  useEffect(() => {
    axios
      .get(url)
      .then((res => {
        setEmployees(res.data)
      }))
  }, [])

  return employees
}

function App() {
  const employees = useEmployees()

  return (
    <div className="App">
      <header>
        <Employee 
          employee={{
            "name": "Name",
            "job_title": "Job Title",
            "department": "Department",
            "company_name": "Company",
            "experience_in_job": "Experience"
          }}
        />
      </header>
      <div className="employees">
        {
          employees.map((employee) => <Employee employee={employee}/>)
        }
      </div>
    </div>
  )
}

export default App
