import { useState, useCallback } from "react";
import { IPV4 } from "../../utils/constants";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      if (url) {
        url = IPV4 + url;
      }

      try {
        if (body) {
          body = JSON.stringify(body);
        }

        const response = await fetch(url, {
          method,
          body,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "something wrong");
        }

        setLoading(false);

        return data.data;
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
