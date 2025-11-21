import React from 'react'
export default function ProfileCard({profile, onOpen}){
  return (
    <div 
      className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-xl transition cursor-pointer border border-gray-200 dark:border-gray-700"
      onClick={onOpen}
    >
      <div className="flex items-center gap-4">
        <img src={profile.foto} className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
        <div>
          <h3 className="font-bold text-lg">{profile.nome}</h3>
          <div className="text-sm opacity-70">{profile.cargo}</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {profile.habilidadesTecnicas.slice(0,3).map((h,i)=>(
          <span key={i} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">{h}</span>
        ))}
      </div>
    </div>
  )
}