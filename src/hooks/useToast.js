import { useCallback, useRef, useState } from "react";

export default function useToast() {
  const timeoutRef = useRef(null);
  const [toast, setToast] = useState({ msg: "", visible: false });

  const showToast = useCallback((msg) => {
    window.clearTimeout(timeoutRef.current);
    setToast({ msg, visible: true });

    timeoutRef.current = window.setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 2200);
  }, []);

  return { toast, showToast };
}
