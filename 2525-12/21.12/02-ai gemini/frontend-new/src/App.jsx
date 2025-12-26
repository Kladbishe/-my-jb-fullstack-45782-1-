import { useState } from 'react'

function App() {
  const [question, setQuestion] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const askGemini = async () => {
    if (!question.trim()) return

    setLoading(true)
    setResult(null)
    try {
      const response = await fetch('http://127.0.0.1:5001/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      })
      const data = await response.json()
      setResult(data)
    } catch (e) {
      setResult({ status: 'error', message: e.message })
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !loading) {
      askGemini()
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        padding: '40px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 10px 0',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700'
          }}>
            Gemini AI Chat
          </h1>
          <p style={{ color: '#666', margin: 0 }}>Powered by Google Gemini 2.0 Flash</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            disabled={loading}
            style={{
              width: '100%',
              padding: '15px 20px',
              fontSize: '16px',
              border: '2px solid #e0e0e0',
              borderRadius: '12px',
              outline: 'none',
              transition: 'all 0.3s',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
          />
        </div>

        <button
          onClick={askGemini}
          disabled={loading || !question.trim()}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '16px',
            fontWeight: '600',
            color: 'white',
            background: loading || !question.trim()
              ? '#ccc'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: loading || !question.trim() ? 'not-allowed' : 'pointer',
            transition: 'transform 0.2s, opacity 0.2s',
            opacity: loading || !question.trim() ? 0.6 : 1
          }}
          onMouseEnter={(e) => {
            if (!loading && question.trim()) {
              e.target.style.transform = 'translateY(-2px)'
            }
          }}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{
                width: '16px',
                height: '16px',
                border: '3px solid rgba(255,255,255,0.3)',
                borderTop: '3px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}></span>
              Thinking...
            </span>
          ) : 'Ask Gemini'}
        </button>

        {result && (
          <div style={{
            marginTop: '30px',
            animation: 'fadeIn 0.5s'
          }}>
            {result.status === 'success' ? (
              <div>
                <h3 style={{
                  color: '#333',
                  fontSize: '1.2rem',
                  marginBottom: '15px',
                  fontWeight: '600'
                }}>
                  Response:
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #e0e0e0',
                  lineHeight: '1.6',
                  color: '#333',
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word'
                }}>
                  {result.answer}
                </div>
                <div style={{
                  marginTop: '10px',
                  fontSize: '12px',
                  color: '#999',
                  textAlign: 'right'
                }}>
                  Model: {result.model}
                </div>
              </div>
            ) : (
              <div style={{
                background: '#fee',
                border: '1px solid #fcc',
                padding: '20px',
                borderRadius: '12px',
                color: '#c33'
              }}>
                <h3 style={{ margin: '0 0 10px 0', fontWeight: '600' }}>Error:</h3>
                <p style={{ margin: 0, whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                  {result.message}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default App