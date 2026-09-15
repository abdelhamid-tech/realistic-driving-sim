import '@vly-ai/integrations';
import { Toaster } from "@/components/ui/sonner";
import { DriverGate } from "@/components/DriverGate";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import { ConvexProvider } from "convex/react";
import { ConvexReactClient } from "convex/react";
import { StrictMode, useEffect, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";
import "./types/global.d.ts";

// Lazy load route components for better code splitting
const Drive = lazy(() => import("./pages/Drive.tsx"));
// the owner's doors: reachable only by typing /import or /assets yourself
const ImportPage = lazy(() => import("./pages/Import.tsx"));
const AssetsPage = lazy(() => import("./pages/Assets.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

// Simple loading fallback for route transitions
function RouteLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  );
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);



function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VlyToolbar />
    <InstrumentationProvider>
      <ConvexProvider client={convex}>
        <BrowserRouter>
          <RouteSyncer />
          <DriverGate>
            <Suspense fallback={<RouteLoading />}>
              <Routes>
                {/* no login and no marketing detour: the garage is the front door */}
                <Route path="/" element={<Drive />} />
                <Route path="/drive" element={<Drive />} />
                <Route path="/import" element={<ImportPage />} />
                <Route path="/assets" element={<AssetsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </DriverGate>
        </BrowserRouter>
        <Toaster />
      </ConvexProvider>
    </InstrumentationProvider>
  </StrictMode>,
);
