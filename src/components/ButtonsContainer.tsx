import { PropsWithChildren } from "react"

type ButtonsContainerProps = PropsWithChildren<{
  isLoading: boolean,
  isFetching: boolean
}>


const ButtonsContainer = ({children, isLoading}: ButtonsContainerProps) => {
  return <>{isLoading ? null : <div className="flex gap-4">{children}</div>}</>
}

export default ButtonsContainer