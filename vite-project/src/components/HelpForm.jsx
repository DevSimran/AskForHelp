import React, { useState } from 'react'
import { useHelp } from '../context/Helpcontexts'

function HelpForm() {
    const [help, setHelp] = useState('')
    const {addHelp} = useHelp()

    const add = (e) =>{
        e.preventDefault()

        if(!help) return

        addHelp({help, completed: false})
        setHelp('')
    }
  return (
    <>
      <form onSubmit={add} className="flex">
        <input
          type="text"
          placeholder="Write Help..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={help}
          onChange={(e) => setHelp(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default HelpForm
