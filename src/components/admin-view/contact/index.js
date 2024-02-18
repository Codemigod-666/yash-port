"use client"

export default function AdminContactView({data}) {
    return <div className="flex flex-col gap-5">
    {data && data.length
      ? data.map((item, index) => (
          <div key={index} className="p-5 border">
            <p className="font-bold">{item.name}</p>
            <p>{item.email}</p>
            <p>{item.message}</p>
            <p> <spam className='font-bold'>Created At:</spam> {item.createdAt.split('T')[0]}</p>
            
          </div>
        ))
      : null}
  </div>
}