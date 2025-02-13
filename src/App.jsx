import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToHash from 'utils/ScrollToHash';
import RouteToTop from 'utils/RouteToTop';

import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import Home from 'pages/Home';

import theme from 'styles/theme';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Router>
          <ScrollToHash />
          <RouteToTop />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
