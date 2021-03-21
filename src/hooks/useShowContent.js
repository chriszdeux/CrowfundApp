import { useState } from "react";

export const useShowContent = ( initialState = false ) => {
  const [showContent, setShowContent] = useState(initialState)

  const toggleShowContent = () => {
    showContent ? setShowContent(initialState) : setShowContent(true)
  }

  return [showContent, toggleShowContent]
}