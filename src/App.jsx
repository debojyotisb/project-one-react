import './App.css'

// import myData from './components/myData';
// var json = require('./components/Data.json')
import Data from './components/Data.json';

function App() {
//  console.log(Data);


  return (
    <>

      {/* <myData /> */}

      <div className='grid'>
        <div className='column'> <h2>First Col</h2>
        </div>
        <div className='column'> <h2>Second Col</h2>
        </div>

      <div className='myContainer' key={ Data.id }> 
      
      <h4>Events Col</h4>
      {
        Data.map( Data => {
          return( 
          <ul>
            <div className='eventData'>
              { Data.ID }<h7>:</h7>{ Data.Location} <br/> { Data.Date} { Data.Time }
            </div>
          </ul>
          
          )
        })
      }
      </div>
      

      </div>
    </>
  )
}

export default App
