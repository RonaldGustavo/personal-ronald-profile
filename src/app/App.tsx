import { SplashScreen } from "@pages";
import React, { Suspense } from "react";
import PublicRoutes from "./routes";

const App: React.FC = () => {

  return(
    <Suspense fallback={<SplashScreen />}>
      <PublicRoutes  />
    </Suspense>
  )
}

export default App;
