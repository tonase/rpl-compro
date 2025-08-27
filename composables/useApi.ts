import type { UseFetchOptions } from "nuxt/app";
import type { IError } from "~/models/Response";

/**
 * @typeparam T: data type of data response
 * @typeparam E: data type of error response
 */

export async function useApi<T, E = any>(
  url: string,
  options?: UseFetchOptions<T>
) {
  const config = useRuntimeConfig();

  const { status, data, error } = await useFetch(url, {
    baseURL: config.public.baseUrlApi,
    watch: false,
    ...options,
    params: {
      ...options?.params,
      lang:
        useCookie("rpl.i18n_redirected").value || config.public.defaultLocale,
    },
  });

  await nextTick();

  const errorValue = error.value as IError<E> | undefined;

  return {
    status: status.value,
    success: status.value === "success",
    data: data.value,
    error: errorValue,
    message: errorValue
      ? errorValue?.data?.message ||
        errorValue?.message ||
        "Terjadi kesalahan pada sistem"
      : "",
  };
}
