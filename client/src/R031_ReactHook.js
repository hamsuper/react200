import React from 'react'
import { useState, useEffect } from 'react'

export default function R031_ReactHook() {
  const [contents, setContents] = useState('this is react');
  useEffect(() => {
    console.log('렌더링')
  })
  
  return (
    <div>
      <h2>{contents}</h2>
      <button type="button" onClick={() => setContents('this is hook')}>버튼</button>
    </div>
  )
}
