import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type TFiltersChangeValue = {
  name: string;
  value: string | number;
};

const useFilters = () => {
  const locationSearch = useLocation().search;
  const params = new URLSearchParams(locationSearch);

  const navigate = useNavigate();

  const filters = useMemo(() => {
    const filters = {} as { [key: string]: string };
    for (const [key, value] of params) {
      filters[key] = value;
    }

    return filters;
  }, [params]);

  const filterCount = useMemo(() => {
    return Object.keys(filters).filter((item) => item !== "page").length;
  }, [filters]);

  // Add multiple values to a single filter
  const addMultipleValueToFilter = ({
    name,
    value,
  }: {
    name: string;
    value: string | number;
  }) => {
    const currentFilters = { ...filters };
    const currentValues = currentFilters[name]
      ? currentFilters[name].split(",")
      : [];

    if (!value || currentValues.includes(String(value))) {
      const newValues = currentValues.filter((item) => item !== String(value));
      currentFilters[name] = newValues.join(",");

      if (!newValues.length) delete currentFilters[name];

      return navigate({
        search: new URLSearchParams(currentFilters).toString(),
      });
    }

    const newValues = [...currentValues, value];
    currentFilters[name] = newValues.join(",");

    return navigate({ search: new URLSearchParams(currentFilters).toString() });
  };

  // Add unique value to a single filter
  const addUniqueValueToFilter = ({
    name,
    value,
  }: {
    name: string;
    value: string | number;
  }) => {
    const currentFilters = { ...filters };

    if (!value) {
      delete currentFilters[name];

      return navigate({
        search: new URLSearchParams(currentFilters).toString(),
      });
    }

    currentFilters[name] = String(value);

    return navigate({ search: new URLSearchParams(currentFilters).toString() });
  };

  const clearFilters = () => {
    return navigate({
      search: new URLSearchParams({}).toString(),
    });
  };

  return {
    filters,
    filterCount,
    addMultipleValueToFilter,
    addUniqueValueToFilter,
    clearFilters,
  };
};

export default useFilters;
