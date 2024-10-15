import React from 'react'

export default function MemberAddress({data}) {
  return (
    <> 
    <section className="flex flex-col items-start justify-start">
      <h6>{data[0]?.ONAMES}{data[0]?.SURNAME}</h6>
      <p>{data[0]?.MEMADDR}</p>
    </section>
  </>
  )
}
