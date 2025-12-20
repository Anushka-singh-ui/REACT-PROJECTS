
import { useState } from "react"

function App() {
  const [color, setColor] = useState("indianred")
   
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                 <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                  <button onClick={ () => setColor('dimgrey')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "dimgray"}}>Dimgray
                    </button>
                    <button onClick={ () => setColor('yellow')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>Yellow
                    </button>
                    <button onClick={ () => setColor('green')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "green"}}>Green
                    </button>
                    <button onClick={ () => setColor('pink')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}>Pink
                    </button>
                    <button onClick={ () => setColor('ivory')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "ivory"}}>Ivory
                    </button>
                    <button onClick={ () => setColor('white')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White
                    </button>
                    <button onClick={ () => setColor('purple')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "purple"}}>Purple
                    </button>
                    <button onClick={ () => setColor('teal')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "teal"}}>Teal
                    </button>
                    <button onClick={ () => setColor('navy')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "navy"}}>Navy
                    </button>
                    <button onClick={ () => setColor('cyan')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "cyan"}}>Cyan
                    </button>
                    <button onClick={ () => setColor('maroon')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "maroon"}}>Maroon
                    </button>
                    <button onClick={ () => setColor('brown')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "brown"}}>Brown
                    </button>
                    <button onClick={ () => setColor('rosybrown')}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "rosybrown"}}>Roseybrown
                    </button>
                    <button onClick={ () => setColor('honeydew')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "honeydew"}}>Honeydew
                    </button>
                    <button onClick={ () => setColor('seashell')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "seashell"}}>Seashell
                    </button>
                    <button onClick={ () => setColor('peachpuff')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "peachpuff"}}>Peachpuff
                    </button>
                    <button onClick={ () => setColor('pldlace')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "oldlace"}}>Oldlace
                    </button>
                    <button onClick={ () => setColor('floralwhite')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "floralwhite"}}>Floralwhite
                    </button>
                 </div>
        </div>
    </div>
  )
}

export default App

