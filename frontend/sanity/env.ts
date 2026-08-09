export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-10'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '00000000'

export const useCdn = false // Always false for ISR/Dynamic revalidation

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}
