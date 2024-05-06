import Button from "../components/Button.js"



export default function ButtonComponent() {
  return (
    <div>
      <Button text="Default" variant="default" />

      <Button text="Success" variant="success" />

      <Button text="Danger" variant="danger" />

      <Button text="Warning" variant="warning" />

      <Button text="Info" variant="info" />
    </div>
  )
}
