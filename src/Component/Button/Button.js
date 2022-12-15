import React from 'react'

function Button({btn="default button"}) {
    return (
             <button class={`px-6  py-2 text-sm transition-colors duration-300 rounded shadow-xl bg-slate-500 hover:bg-slate-600 text-slate-100 shadow-slate-400`}>{btn}</button>
    )
}

export default Button
