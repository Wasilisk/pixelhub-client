import { useEffect, useState } from 'react'

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    handleChange()

    if (matchMedia.addEventListener) {
      matchMedia.addEventListener('change', handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener('change', handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }

  }, [query])

  return matches
}

export default useMediaQuery