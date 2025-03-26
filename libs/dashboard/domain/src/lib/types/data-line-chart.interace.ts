export interface DataLineChart {
  name: string,
  series: DataSeries[]
}

interface DataSeries {
  name: string,
  value: number
}
