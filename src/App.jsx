import React, {useState, useMemo} from 'react'
import profiles from './data/profiles.json'
import ProfileCard from './components/ProfileCard'
import ProfileModal from './components/ProfileModal'

export default function App(){
  const [query, setQuery] = useState('')
  const [filterArea, setFilterArea] = useState('Todos')
  const [dark, setDark] = useState(false)
  const [selected, setSelected] = useState(null)

  const areas = useMemo(()=>{
    const s = new Set(profiles.map(p=>p.area))
    return ['Todos', ...Array.from(s)]
  },[])

  const filtered = profiles.filter(p=>{
    const q = query.toLowerCase()
    if(filterArea !== 'Todos' && p.area !== filterArea) return false
    return p.nome.toLowerCase().includes(q) || p.habilidadesTecnicas.join(' ').toLowerCase().includes(q)
  })

  return (
    <div className={dark ? 'dark' : ''}>
      <header className="w-full py-6 px-6 bg-gradient-to-r from-primary to-secondary text-white shadow">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight">Neo Talentos Network</h1>

          <div className="flex items-center gap-3">
            <input value={query} onChange={e=>setQuery(e.target.value)}
              placeholder="Pesquisar talentos..." 
              className="px-3 py-2 rounded-lg text-black" />

            <select value={filterArea} 
              onChange={e=>setFilterArea(e.target.value)}
              className="px-3 py-2 rounded-lg text-black">
              {areas.map(a=> <option key={a} value={a}>{a}</option>)}
            </select>

            <button onClick={()=>setDark(d=>!d)} 
              className="px-3 py-2 rounded-lg bg-black/20">Tema</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p =>
          <ProfileCard key={p.id} profile={p} onOpen={()=>setSelected(p)} />
        )}
      </main>

      {selected && <ProfileModal profile={selected} onClose={()=>setSelected(null)} />}
    </div>
  )
}
