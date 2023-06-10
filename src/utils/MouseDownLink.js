import { useNavigate } from 'react-router-dom'

const MouseDownLink = ({ to, className, children }) => {
  const navigate = useNavigate()

  const handleMouseDown = (event) => {
    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} className={className} onMouseDown={handleMouseDown}>
      {children}
    </a>
  )
}

export default MouseDownLink
