import React from 'react'

function ErrorMens({esError, mensaje}) {
  return (
    <div className={ esError? "strong color:red" : "strong"}>
      {text}
    </div>
  )
}

export default ErrorMsg 