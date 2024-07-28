import './App.css'
import Button from './components/button/Button'

function App() {
  return (
    <div>
      <Button label="Primary Button" primary />
      <Button label="Secondary Button" size="medium" />
      <Button label="Large Button" size="large" />
      <Button label="Small Button" size="small" />
      <Button label="Disabled Button" disabled />
    </div>
  )
}

export default App
