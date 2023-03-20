import { defineStore } from "pinia";
import type { DeepPartial } from "unocss";
import type { MenuSetting, ProjectConfig, TransitionSetting } from "@celeris/types";
import { PROJECT_CONFIG_KEY } from "@celeris/constants";
import { deepMerge } from "@celeris/utils";
import projectConfig from "~/config/projectConfig";

interface AppState {
  // project config
  projectConfig: ProjectConfig;
}

export const useAppStore = defineStore({
  id: "app",
  state: (): AppState =>
    useLocalStorage(
      PROJECT_CONFIG_KEY,
      {
        projectConfig,
      },
    ).value,
  getters: {
    getProjectConfig(): ProjectConfig {
      return this.projectConfig || ({} as ProjectConfig);
    },

    getMenuSetting(): MenuSetting {
      return this.getProjectConfig.menuSetting;
    },

    getTransitionSetting(): TransitionSetting {
      return this.getProjectConfig.transitionSetting;
    },

  },
  actions: {
    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      this.projectConfig = deepMerge(this.projectConfig || {}, config);
      useLocalStorage(PROJECT_CONFIG_KEY, this.projectConfig);
    },
  },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
