type LoaderProps = {
    isLoading: boolean
    isFetching: boolean
}

const Loader = ({isLoading, isFetching}: LoaderProps) => {
  return <>{isLoading ? <h1 className=" text-xl ">Loading...</h1> : isFetching ? <h1>Loading...</h1> : null}</>
}

export default Loader