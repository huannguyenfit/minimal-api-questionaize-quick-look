export const pageSizing = 8

export interface SearchCriteriaReq {
	keyword?: string
	page: number
	pageSize: number
	sortNames?: string[]
	sortDirections?: OrderDirection[]
	allItem?: boolean
}

export const defaultCriteria: SearchCriteriaReq = {
	keyword: "",
	page: 1,
	pageSize: pageSizing,
	sortNames: [],
	sortDirections: []
}

export interface SearchCriteriaRes<T> {
	items: T[]
	page: number
	pageSize: number
	total: number
	totalPage: number
}

export const defaultDataSearchCriteriaRes: SearchCriteriaRes<any> = {
	items: [],
	page: 0,
	pageSize: 0,
	total: 0,
	totalPage: 0,
}

export enum OrderDirection {
	"OrderBy" = "OrderBy",
	"OrderByDescending" = "OrderByDescending",
}

export enum SearchProcessType {
	All = "All",
	Process = "Process",
	Template = "Template",
}

export enum SearchSessionType {
	All = "All",
	Session = "Session",
	Template = "Template",
}

export const initialBasePagingRequest: SearchCriteriaReq = {
	page: 1,
	pageSize: 10,
	sortNames: ["CreatedDate"],
	sortDirections: [OrderDirection.OrderByDescending],
	keyword: "",
}
