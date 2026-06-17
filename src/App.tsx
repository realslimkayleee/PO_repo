import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SubscriptionProvider } from './SubscriptionContext'
import { Layout } from './components/Layout'
import { Discover } from './pages/Discover'
import { CreatorProfile } from './pages/CreatorProfile'
import { Feed } from './pages/Feed'
import { Studio } from './pages/Studio'
import { Search } from './pages/Search'
import { Settings } from './pages/Settings'

function App() {
  return (
    <SubscriptionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Discover />} />
            <Route path="creator/:handle" element={<CreatorProfile />} />
            <Route path="feed" element={<Feed />} />
            <Route path="studio" element={<Studio />} />
            <Route path="search" element={<Search />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SubscriptionProvider>
  )
}

export default App
