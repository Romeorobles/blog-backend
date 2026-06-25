// src/App.tsx

import DocumentTitle    from './components/DocumentTitle'
import OnlineStatus     from './components/OnlineStatus'
import WindowSize       from './components/WindowSize'
import LiveClock        from './components/LiveClock'
import SearchWithEffect from './components/SearchWithEffect'
import DebounceSearch   from './components/DebounceSearch'
import FetchUser        from './components/FetchUser'
import AutoFocusInput   from './components/AutoFocusInput'

export default function App() {
  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <section>
        <h2>1. DocumentTitle</h2>
        <DocumentTitle />
      </section>
      <section>
        <h2>2. OnlineStatus</h2>
        <OnlineStatus />
      </section>
      <section>
        <h2>3. WindowSize</h2>
        <WindowSize />
      </section>
      <section>
        <h2>4. LiveClock</h2>
        <LiveClock />
      </section>
      <section>
        <h2>5. SearchWithEffect</h2>
        <SearchWithEffect />
      </section>
      <section>
        <h2>6. DebounceSearch</h2>
        <DebounceSearch />
      </section>
      <section>
        <h2>7. FetchUser</h2>
        <FetchUser />
      </section>
      <section>
        <h2>8. AutoFocusInput</h2>
        <AutoFocusInput />
      </section>
    </main>
  )
}
