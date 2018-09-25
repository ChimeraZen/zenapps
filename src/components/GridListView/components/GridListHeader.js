import React from 'react'

import './css/GridListHeader.css'

import GridListOptions from './GridListOptions'

const GridListHeader = (props) => {
  return (
  	<div className="grid-list-header">
      <h2>{props.title}</h2>
      <GridListOptions />
    </div>
  )
}

export default GridListHeader
