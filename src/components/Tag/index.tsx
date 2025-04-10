import { TagContainer } from "./styles";

export type Props ={
  children: string
}

export function Tag({children} :Props) {
  return(
    <TagContainer>{children}</TagContainer>
  )
}
