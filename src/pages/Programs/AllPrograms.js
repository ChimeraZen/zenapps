// Config
import React from 'react'

// Components
import {  List,
          ListItem,
          ListTitle } from '../../components/List'

import {  GridListView,
          GridListItem,
          GridListHeader } from '../../components/GridListView'

import VigenereCipher from '../../components/VigenereCipher'

export const AllPrograms = () => 
  <div className="all-programs">
    <div className="small-column">
      <List>
        <ListTitle>All Programs</ListTitle>
        <ListItem>Vigenere Cipher</ListItem>
        <ListItem>Simple List</ListItem>
        <ListItem>Grid-List View</ListItem>
      </List>
    </div>
    <div className="small-column">
      <GridListView>
        <GridListHeader>
        Grid-List View
        </GridListHeader>
        <GridListItem>
        List Item 1
        </GridListItem>
        <GridListItem>
        List Item 2
        </GridListItem>
        <GridListItem>
        List Item 3
        </GridListItem>
        <GridListItem>
        List Item 4
        </GridListItem>
        <GridListItem>
        List Item 5
        </GridListItem>
      </GridListView>
    </div>
    <div className="small-column">
      <VigenereCipher />
    </div>
  </div>

export default AllPrograms
