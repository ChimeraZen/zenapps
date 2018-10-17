// Config
import React from 'react'

import './styles.css'

// Components
import {  Column,
          Row } from '../../../components/Bootstrap'

import {  GridListView,
          GridListItem,
          GridListHeader } from '../../../components/GridListView'

import ProgramDetails from '../ProgramPage'
import VigenereCipher from '../../../components/VigenereCipher'

export const AllPrograms = () => 
  <Row className="all-programs">
    <ProgramDetails />
  
    <Row>
      <Column type="small" withPadding>
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
      </Column>

      <Column type="medium" withPadding>
        <VigenereCipher />
      </Column>
    </Row>
  </Row>

export default AllPrograms
