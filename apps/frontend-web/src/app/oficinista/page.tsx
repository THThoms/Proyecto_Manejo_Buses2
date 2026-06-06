import { redirect } from 'next/navigation';

// /oficinista redirige automáticamente a /oficinista/cobrar
export default function OficinaRoot() {
  redirect('/oficinista/cobrar');
}
