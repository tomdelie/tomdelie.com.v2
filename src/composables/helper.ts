import { useI18n } from "vue-i18n";
import { RouteLocationRaw, useRoute } from "vue-router";

export const useHelper = () => {
  const localePath = (name: string, params: Record<string, any> = {}) => {
    const route = useRoute();
    const { locale } = useI18n();
  
    return {
      name,
      params: {
        ...params,
        locale: locale.value || route.params.locale || 'fr'
      }
    };
  }

  const switchLocalePath = (): RouteLocationRaw => {
    const route = useRoute();
    const { locale } = useI18n();

    const newLocale = locale.value === 'fr' ? 'en' : 'fr';

    const newParams = {
      ...route.params,
      locale: newLocale
    };

    return {
      name: route.name as string,
      params: newParams,
      query: route.query
    };
  }

  return {
    localePath,
    switchLocalePath,
  }
}