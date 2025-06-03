import { useEffect, useState } from "react";
import { decodeJWT } from "../../../shared/utils/decodeJWT";
import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import type { Stats } from "../../../app/types/stats";

export const useStats = () => {
  const user = decodeJWT(localStorage.getItem("token"));

  const [stats, setStats] = useState<Stats | null>(null);

  const getStats = async () => {
    const stats = await api.get(endpoints.stats.get(user.id));
    setStats(stats.data);
  };

  useEffect(() => {
    getStats();
  }, [setStats]);

  return { stats };
};
