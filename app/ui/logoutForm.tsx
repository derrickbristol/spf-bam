
import {logout}  from "../../lib"
const LogoutForm = () => {
  return (
    <form action={logout}>
      <button>logout</button>
    </form>
  )
}

export default LogoutForm