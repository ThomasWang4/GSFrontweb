import React from 'react'
export default function ProfileModal({profile, onClose}){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-3xl w-full p-6 relative z-10 overflow-auto max-h-[85vh]">
        <button onClick={onClose} className="absolute right-4 top-4 text-sm bg-primary text-white px-3 py-1 rounded">Fechar</button>

        <div className="flex gap-4">
          <img src={profile.foto} className="w-28 h-28 rounded-full object-cover border-4 border-primary" />
          <div>
            <h2 className="text-2xl font-bold">{profile.nome}</h2>
            <div className="opacity-70">{profile.cargo}</div>
            <p className="mt-3">{profile.resumo}</p>
          </div>
        </div>

        <h3 className="mt-4 font-semibold text-primary">Experiências</h3>
        <ul className="list-disc ml-5 opacity-80">
          {profile.experiencias.map((e,i)=>(
            <li key={i}><strong>{e.cargo}</strong> — {e.empresa} ({e.inicio} → {e.fim || 'Atual'})</li>
          ))}
        </ul>

        <h3 className="mt-4 font-semibold text-primary">Formação</h3>
        <ul className="list-disc ml-5 opacity-80">
          {profile.formacao.map((f,i)=>(
            <li key={i}>{f.curso} — {f.instituicao} ({f.ano})</li>
          ))}
        </ul>
      </div>
    </div>
  )
}