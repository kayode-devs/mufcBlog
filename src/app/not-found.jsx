import ErrorComponent from '@/_local-components/errorPage'
import React from 'react'

const PageNotFound = () => {
  return (
    <div>
      <ErrorComponent error={"This page could not be found"}/>
      <p></p>
    </div>
  )
}

export default PageNotFound
