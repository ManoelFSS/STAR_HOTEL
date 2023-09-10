import React from 'react'
import { Main } from './componentes/main/Main'
import { AppProvider} from './AppContext'
import { ApiProvider } from './ApiContext'

function App() {

  return (
    
    <>
      <ApiProvider>
        <AppProvider> 
          <Main/>
        </AppProvider>
      </ApiProvider>
    </>
  )
}

export default App
