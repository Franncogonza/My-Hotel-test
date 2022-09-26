export interface IReusableTable {
  headerName: string;
  field: string | object;
  sortable?: boolean;
  linkeable?: boolean;
  redirectTo?: string;
  isJson?: boolean;
  sufix?: string;
  prefix?: string;
  isBoolean?: boolean;
  isNested?: boolean;
  target?: string;
  edit?: boolean;
  isFeatureFlag?: boolean;
}
