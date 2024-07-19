import React from 'react'
import './App.css'
import ArticleList from './components/ArticleList'
import { ThemeProvider } from './components/ui/Theme'
import Header from './components/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//crear el cliente de reactQ
const queryClient= new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" storageKey="vite-ui-theme">
        <Header/>
        <ArticleList/>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App
