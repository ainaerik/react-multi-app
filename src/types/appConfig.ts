export type TAppName = "insc" | "shpr";

export type TAppConfig = {
  [key in TAppName]: {
    name: string;
    dashboard?: {
      header?: {
        display?: boolean;
      };
      icon?: {
        [key: string]: unknown;
      };
      logo?: {
        short?: string;
        long?: string;
      };
      background?: boolean;
    };
    login?: {
      logoUrl?: string;
      background?: {
        url?: string;
        hex?: string;
      };
      title?: string;
      subTitle?: string;
    };
    messages?: {
      tabs?: {
        [key: string]: unknown;
      };
      conversation?: {
        [key: string]: unknown;
      };
      content?: {
        displayDate?: boolean;
      };
    };
    talents?: {
      list?: {
        layout?: {
          buttonAddTalent: "top" | "bottom";
          filter?: boolean;
        };
        columns?: {
          firstName?: boolean;
          lastName?: boolean;
          jobWanted?: boolean;
          status?: boolean;
          visibility?: boolean;
          action?: boolean;
          showcase?: boolean;
        };
      };
      details?: {
        [key: string]: unknown;
      };
      filters?: {
        [key: string]: unknown;
      };
    };
    client?: {
      [key: string]: unknown;
    };
    contact?: {
      [key: string]: unknown;
    };
    notifications?: {
      [key: string]: unknown;
    };
  };
};
