import { useEffect, useState } from "react";
import Landing from "./Landing";

export default function App() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div>
      <Landing onNav={() => {}} onToast={setToast} />

      {toast && (
        <div style={{
          position: "fixed", left: "50%", bottom: 24, transform: "translateX(-50%)",
          background: "var(--text)", color: "var(--bg)", padding: "12px 20px",
          borderRadius: "var(--r-full)", fontSize: "var(--t-14)", fontWeight: 500,
          boxShadow: "var(--shadow-lg)", animation: "toastIn .3s var(--ease)",
          zIndex: 50,
        }}>
          {toast}
        </div>
      )}
    </div>
  );
}
