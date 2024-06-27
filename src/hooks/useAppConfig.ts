import { AppConfig } from "../app.config";
import type { TAppConfig, TAppName } from "../types/appConfig";

const APP = import.meta.env.VITE_APP || "";

export function useAppConfig() {
  const appName = APP as TAppName;
  const appConfig = AppConfig[APP as never] as TAppConfig;

  return { appName, appConfig } as const;
}
