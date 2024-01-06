import React from 'react'

function GHeader() {
  return (
    <div className='flex-col items-center justify-center mx-auto'>
        <div className='text-center'>
        <h1 className='p-2 m-2 text-sm'>
            <span className='text-sm font-mono bg-slate-50 p-2'>Announcement</span> we hare happy to announce that we raise<span className='text-purple-700 px-1' >$2million</span> in seed funding</h1>
        </div>
        <hr className='bg-slate-200'/>
    </div>
  )
}

export default GHeader
