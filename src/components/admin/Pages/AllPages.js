import React from 'react'
import { privateAPI } from '../../../api'

// Components
import {
  DragListTable,
  DragListTableHeader,
  DragListTableRow,
  DragListTableColumn
} from '../../../programs/DragListTable'

class AllPages extends React.Component {
  componentDidMount() {
    const settings = privateAPI.getComponentSettings("AllPages"),
          pages = privateAPI.getCollection("pages")
    
    Promise.all([settings, pages]).then(results => {
      const settings = results[0],
            items = results[1]

      this.setState({ 
        settings: settings,
        items: items })
    })
  }
  
  render() {
    return this.state !== null &&
      <DragListTable order={this.state.settings.order}>
        <DragListTableHeader>
          <DragListTableColumn id="title">
            Title
          </DragListTableColumn>
          <DragListTableColumn id="category">
            Category
          </DragListTableColumn>
        </DragListTableHeader>
        {
          this.state.items.map((item, i) => 
            <DragListTableRow key={"tableRow" + i} id={i}>
              <DragListTableColumn id="title">
                {item.title}
              </DragListTableColumn>
              <DragListTableColumn id="category">
                {item.category}
              </DragListTableColumn>
            </DragListTableRow>
          )
        }
      </DragListTable>
  }
}

export default AllPages
