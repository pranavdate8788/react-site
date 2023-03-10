import React from 'react'
import Home from './Home'
import VerticalNav from './VerticalNav'

export default function HomeSection() {
  return (
    <div className="flex bg-slate-100">
        <VerticalNav/>
        <Home/>
    </div>
  )
}
