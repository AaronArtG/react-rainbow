import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState([
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'brown',
    'lightblue',
    'pink',
  ])
const addColor = (newColor) => {
  setColors([...colors, newColor])
}
let colorMap = colors.map((color, i )=> {
  return <ColorBlock key={i} color={color} />
})
return (
  <div className="App">
    {colorMap}
    <ColorForm addColor={addColor} />
  </div>
)
}

export default App;

//   let colorMap = colors.map((color, i )=> {
//     return (
//       <ColorBlock color={color} />
//     )
//   })
//   return (
//     <div className="App">
//  {colorMap}
//     </div>
//   );
// }

