'use client'

export default function GlobalError({ error, reset }) {
  if (typeof window !== 'undefined') {
    console.error('Global app error:', error)
  }

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#FAFAF8' }}>
        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', color: '#111111' }}>Something went wrong</h1>
          <p style={{ color: '#888886', maxWidth: '28rem', marginTop: '1rem' }}>
            The page hit an error while loading. Try again.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              background: '#111111',
              color: '#FAFAF8',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Reload
          </button>
        </main>
      </body>
    </html>
  )
}
