import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// AUTH
export async function signUp(email, password, name) {
  const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name } } })
  if (error) throw error
  if (data.user) await supabase.from('profiles').insert({ id: data.user.id, email, plan: 'trial' })
  return data
}
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}
export async function signOut() { await supabase.auth.signOut() }
export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
export function onAuthChange(cb) {
  return supabase.auth.onAuthStateChange((_, session) => cb(session?.user || null))
}

// PERFIL
export async function getProfile(userId) {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single()
  if (error) throw error
  return data
}
export async function updateProfile(userId, updates) {
  const { data, error } = await supabase.from('profiles').update(updates).eq('id', userId).select().single()
  if (error) throw error
  return data
}

// BRAIN
export async function saveBrain(userId, brainData) {
  const { error } = await supabase.from('profiles').update({ brain_data: brainData }).eq('id', userId)
  if (error) throw error
}
export async function getBrain(userId) {
  const { data, error } = await supabase.from('profiles').select('brain_data').eq('id', userId).single()
  if (error) throw error
  return data?.brain_data || {}
}

// CAMPAÑAS
export async function saveCampaign(userId, campaign) {
  const { data, error } = await supabase.from('campaigns').insert({
    user_id: userId,
    title: campaign.title || 'Sin título',
    content: campaign,
    voxa_score: campaign.score || 0,
    platform: campaign.platform || 'Meta',
    status: 'active',
  }).select().single()
  if (error) throw error
  return data
}
export async function getCampaigns(userId, limit = 20) {
  const { data, error } = await supabase.from('campaigns').select('*')
    .eq('user_id', userId).order('created_at', { ascending: false }).limit(limit)
  if (error) throw error
  return data || []
}

// BETA
export async function validateBetaCode(code) {
  const { data, error } = await supabase.from('beta_codes')
    .select('*').eq('code', code.toUpperCase()).eq('used', false).single()
  if (error) return { valid: false }
  return { valid: true, data }
}
export async function useBetaCode(code, userId) {
  const { error } = await supabase.from('beta_codes')
    .update({ used: true, used_by: userId, used_at: new Date().toISOString() })
    .eq('code', code.toUpperCase())
  if (error) throw error
  await updateProfile(userId, {
    plan: 'beta',
    trial_ends_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
  })
}
