import './App.css'
import Button from './components/button/Button'
import Card from './components/card/Card'

function App() {
  return (
    <div>
      <Button label="Primary Button" primary />
      <Button label="Secondary Button" size="medium" />
      <Button label="Large Button" size="large" />
      <Button label="Small Button" size="small" />
      <Button label="Disabled Button" disabled />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}  
      >
      <Card

        image="https://images.unsplash.com/photo-1700280761419-f37c16ab86fb?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Sample Card"
        description="This is a description of the card. It provides additional details."
      />

      <Card
        image="https://images.unsplash.com/photo-1718520704252-fdbe24a4e6da?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Custom Card Title"
        description="Custom description for the card with different content."
      />

      </div>
    </div>
  )
}

export default App
