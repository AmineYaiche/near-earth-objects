export type ChartOptions = Partial<{
  [otherOptionKey: string]: any;
  width: number;
  height: number;
  is3D: boolean;
  title: string;
  backgroundColor: string;
  hAxis?: {
      [otherOptionKey: string]: any;
      minValue?: any;
      maxValue?: any;
      ticks?: number[] | undefined;
      title?: string | undefined;
      viewWindow?: {
          max?: any;
          min?: any;
      } | undefined;
  } | undefined;
  vAxis?: {
      [otherOptionKey: string]: any;
      minValue?: any;
      maxValue?: any;
      ticks?: number[] | undefined;
      title?: string | undefined;
      viewWindow?: {
          max?: any;
          min?: any;
      } | undefined;
  } | undefined;
  legend: any;
  colors: string[];
}>

export type ChartData = any[]