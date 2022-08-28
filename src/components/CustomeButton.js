import React from 'react'
import Button from 'react-bootstrap/Button'

function CustomeButton({title}) {
  return (
    <div>
       <Button variant='primary' size='lg'>
        {title}
        </Button> 
    </div>
  )
}


export default CustomeButton