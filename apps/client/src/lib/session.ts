import 'server-only';
import { cookies } from 'next/headers';

export async function LogoutSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
