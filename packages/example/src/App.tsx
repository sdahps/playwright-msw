import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/login-form';
import { UserProfile } from './components/user-profile';
import { UsersList } from './components/users-list';
import { SettingsForm } from './components/settings-form';
import { Documents } from './components/documents';
import { Search } from './components/search';
import { ConfigTitle } from './components/config-title';

const queryClient = new QueryClient();
const apolloClient = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/config-title" element={<ConfigTitle />} />
            <Route path="/documents/:slug" element={<Documents />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/search" element={<Search />} />
            <Route path="/users/:userId" element={<UserProfile />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/settings" element={<SettingsForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </QueryClientProvider>
  );
};

export default App;
