import { storeQuestions } from './store/storeQuestions'

import { NavComponent } from './componentes/NavComponent'
import { StartComponent } from './componentes/StartComponent'

import{GameMain} from './componentes/GameMain'
import { Footer } from './componentes/Footer'

import { question } from './types'
import './styles/aside.css'
function App() {
const questions : question[] = storeQuestions(state => state.questions)

  return (
    
    <main style={{ maxWidth: '1200px', maxHeight:'vh', boxSizing:'border-box', margin:'auto', position:'relative' }}>
    <NavComponent />
    { questions.length == 0 ? <StartComponent questions={questions[questions.length -1]}/> : <GameMain questions={questions[questions.length -1]} />}
    
    
      <Footer/>
    </main>
  
  )
}

export default App
