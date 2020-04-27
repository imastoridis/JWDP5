import React from 'react'


class Test extends React.Component {

  handleClick = event => {
   console.log(event.currentTarget)
  }
 
  render() {
   const items = [
    {id: "six", number: 6},
    {id: "seven", number: 7},
    {id: "eight", number: 8},
    {id: "nine", number: 9}
   ]
   return (
    <div >
      {items.map(el => ( 
        <div className="rowOne" key={el.id} onClick={() => this.handleClick(items)}> 
          {el.number}
        </div>
    
      ))}
    </div>
  )
  }
 }

 export default Test