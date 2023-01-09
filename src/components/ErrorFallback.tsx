interface Iprops{
  error:error,
  resetErrorBoundary:()=>void,
}

interface error{
  message:string
}

export function ErrorFallback(props:Iprops) {
  const {error, resetErrorBoundary}=props
  return (
    <>
      <h2 className="text-danger">Something went wrong!</h2>
      <h4>Random Number : {error.message}</h4>
      <button className="border-1" onClick={resetErrorBoundary}>Re-Generate</button>
    </>
  )
}