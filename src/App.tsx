import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import { ResetStyles } from "./styles/reset.styles";
import { GlobalStyle } from "./styles/global.styles";

import Navigation from "./routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import TraineeManagement from "./routes/trainee-management/trainee-management.component";
import EquipmentManagement from "./routes/equipment-management/equipment-management.component";
import SalesManagement from "./routes/sales-management/sales-management.component";
import Reports from "./routes/reports/reports.component";
import Analytics from "./routes/analytics/analytics.component";
import Settings from "./routes/settings/settings.component";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="trainees" element={<TraineeManagement />} />
            <Route path="equipment" element={<EquipmentManagement />} />
            <Route path="sales" element={<SalesManagement />} />
            <Route path="reports" element={<Reports />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
