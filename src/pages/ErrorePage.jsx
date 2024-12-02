import { useRouteError, Link } from "react-router-dom"


function ErrorePage() {
  const errore = useRouteError();
  console.log(errore);

  return (
    <div>
      <h1>this is errore page</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <h2 className="text-2xl">
        status:{errore.status} | message:{errore.statusText}
      </h2>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default ErrorePage