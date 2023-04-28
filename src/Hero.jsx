import React from 'react'
import ErrorBoundary from './ErrorBoundary'

function Hero({heroName}) {
    if (heroName === "Joker") {
        throw new Error("Joker is not a Hero")
    }
  return (
    <ErrorBoundary>
        <div>
            {heroName}
        </div>
    </ErrorBoundary>
  )
}

export default Hero
