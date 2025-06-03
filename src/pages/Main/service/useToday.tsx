import React, { useEffect, useState } from "react";
import { decodeJWT } from "../../../shared/utils/decodeJWT";
import { api, METHODS } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import type { Today } from "../../../app/types/today";

export const useToday = () => {
  const user = decodeJWT(localStorage.getItem("token"));

  const [today, setToday] = useState<Today | null>(null);

  const getToday = async () => {
    const today = await api.get(endpoints.months.getToday(user.id));
    setToday(today.data);
  };

  const setTodayCount = async (count: number) => {
    await api.patch(endpoints.months.set(user.id), { count });
    getToday();
  };

  useEffect(() => {
    getToday();
  }, [setToday]);

  return { today, setTodayCount };
};
