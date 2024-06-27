import { useAppConfig } from "../../hooks/useAppConfig";

export function Talents() {
  const { appName, appConfig } = useAppConfig();

  return (
    <div>
      <pre>{JSON.stringify({ appName, appConfig }, null, 2)}</pre>
    </div>
  );
}
