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
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}