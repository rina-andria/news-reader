export interface ISearch {
  readonly q?: string;
  readonly from?: string;
  readonly to?: string;
  readonly language?: string;
  readonly sortby?: string;
  readonly page?: number;
  onFilterChange: (
    filterName: string | string[],
    value: any | any[],
    triggerSearch?: boolean
  ) => void;
  onSearch: () => void;
}
