import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [searchVal, setSearchVal] = useState('')
  const [results, setResults] = useState([])

  const getResults = async (term) => {
    const response = await fetch(`/api/products/search?term=${term}`)
    const data = await response.json()
    
    setResults(data)
  }

  useEffect(() => {
    if (searchVal) getResults(searchVal)
    else setResults([])
  }, [searchVal])

  return (
    <div className='flex w-full justify-center p-4'>
      <div className='container'>
        <div className='flex w-full justify-center p-2'>
          <img className='w-56' src="logo.png" alt="logo" />
        </div>

        <div className="flex w-full justify-center p-2">
          <input 
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Search Products" 
          type="text" 
          className="border-gray-500 border-2 w-64 rounded-md p-2 outline-none" />
        </div>

        <div className="flex w-full justify-center p-2">
          {results.length > 0 && searchVal && (
            <table class="table-auto rounded-md">
              <thead>
                <tr className='border-gray-500 border-2'>
                  <td className='p-4'>Id</td>
                  <td className='p-4'>Name</td>
                  <td className='p-4'>Description</td>
                  <td className='p-4'>Price</td>
                </tr>
              </thead>

              <tbody>
                {results.map(result => {
                  return (
                    <tr className='border-gray-500 border-2'>
                      <td>{result.id}</td>
                      <td>{result.name}</td>
                      <td>{result.description}</td>
                      <td>{result.price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
