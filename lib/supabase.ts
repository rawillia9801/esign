export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
}

export function initializeBackend(){
  return {
    connected: !!supabaseConfig.url && !!supabaseConfig.anonKey,
    provider: 'Supabase Ready'
  }
}
