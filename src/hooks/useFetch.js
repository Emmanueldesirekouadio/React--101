import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();
    let ignored = false;

    async function run() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const json = await response.json();
        if (!ignored) setData(json);
      } catch (err) {
        if (ignored) return;
        if (err?.name === "AbortError") return;
        setError(err);
      } finally {
        if (!ignored) setLoading(false);
      }
    }

    run();

    return () => {
      ignored = true;
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

