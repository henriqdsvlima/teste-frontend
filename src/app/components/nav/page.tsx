'use client'
import './nav.css'
import {useRouter} from 'next/navigation'
export default function Nav() {
    const router = useRouter()
  return (
    <nav className='container-nav column'>
      <button  onClick={()=> router.push('/pages/brazil')} className="text-white">Casos no Brasil</button>
      <button  onClick={() => router.push('/pages/worldwide')} className="text-white">Casos no Mundo</button>
      
    </nav>
  );
}