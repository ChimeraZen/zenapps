// Config
import React from 'react'

import './styles.css'

// Components
import {  Column,
          Row } from '../../../components/Bootstrap'

import {  SimpleList,
          SimpleListItem,
          SimpleListTitle } from '../../../components/Lists/SimpleList'

import {  GridListView,
          GridListItem,
          GridListHeader } from '../../../components/GridListView'

import VigenereCipher from '../../../components/VigenereCipher'

export const AllPrograms = () => 
  <Row className="all-programs" withPadding>
    <Column type="small" withPadding>
      <SimpleList>
        <SimpleListTitle>All Programs</SimpleListTitle>
        <SimpleListItem>Vigenere Cipher</SimpleListItem>
        <SimpleListItem>Simple List</SimpleListItem>
        <SimpleListItem>Grid-List View</SimpleListItem>
      </SimpleList>
    </Column>
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
    <Column type="small" withPadding>
      <VigenereCipher />
    </Column>
  </Row>

export default AllPrograms
