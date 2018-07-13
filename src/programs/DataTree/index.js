import React from 'react'

import './assets/css/default.css'

export default class DataTree extends React.Component {
	constructor(props) {
  	super(props)
    this.state = {
      list: [
        {
          title: 'Archery',
          parent: false						// parent is false if list item is top-level
        },
        {
          title: 'Blacksmithing',
          parent: false
        },
        {
          title: 'Arrowheads',
          parent: 'Archery'
        },
        {
          title: 'Shafts',
          parent: 'Archery'
        },
        {
          title: 'Carbon Fiber',
          parent: 'Shafts'
        },
        {
          title: 'Plastic',
          parent: 'Shafts'
        },
        {
          title: 'Tongs',
          parent: 'Blacksmithing'
        },
        {
          title: 'Hammers',
          parent: 'Blacksmithing'
        },
        {
          title: 'Broadhead',
          parent: 'Arrowheads'
        },
        {
          title: 'Baseball',
          parent: false
        }
      ]
    }
    this.handleExpand = this.handleExpand.bind(this)
  }
  
  handleExpand(e) {
  	e.target.parentNode.classList.toggle('expand')
  }
  
  inTree_r(needle, haystack) {
  	for(let i in haystack) {
    	const stack = haystack[i]
      if(needle === stack.title) {
      	return true
      } else {
      	if(stack.children.length > 0) {
        	this.inTree_r(needle, stack.children)
        }
      }
      return false
    }
  }

  pushTree_r(needle, parent, haystack) {
  	for(let i in haystack) {
    	const stack = haystack[i]
    	if(parent === stack.title) {
      	stack.children.push(needle)
      } else {
      	this.pushTree_r(needle, parent, stack.children)
      }
    }
  }
  
  sortTree_r(haystack) {
  	for(let i in haystack) {
    	const stack = haystack[i]
      haystack.sort((a,b) => a.title > b.title)
      if(stack.children.length > 0) {
        this.sortTree_r(stack.children)
      }
    }
  }

  buildTree(roots) {
    const tree = (
      <ul className="data-tree">
        {roots.map(branch => {
          return (
            <li key={branch.title} className={branch.children.length > 0 ? "data-container" : null}>
              {
                branch.children.length > 0 ? 
                <i className="fas fa-chevron-right tree-nav" onClick={this.handleExpand}></i> 
                :
                  <i></i>
              }
              <p>{branch.title}</p>
              {branch.children.length > 0 && this.buildTree(branch.children)}
            </li>
          )
        })}
      </ul>
    )
    return tree
  }

  getTree(list, topLevel=false) {
    const roots = []
    for(let i in list) {
      if(!this.inTree_r(list[i].title, roots)) {
        list[i].children = []
        if(list[i].parent === topLevel) {
          roots.push(list[i])
        } else {
          this.pushTree_r(list[i], list[i].parent, roots)
        }
      }
    }
    this.sortTree_r(roots)
    const tree = this.buildTree(roots)
    return tree
  }
  
	render () {
  	return (
    	<div className="data-trunk">
        <h2>Categories</h2>
        {// Optional: second parameter 'root' is used to define the top-level
        this.getTree(this.state.list)
        }
      </div>
    )
  }
}
