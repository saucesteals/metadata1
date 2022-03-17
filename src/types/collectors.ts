import * as Collectors from "../collectors";
import { UnionMerge } from "./helpers";

export interface CollectorData {
  start: number;
  userAgent: string;
  location: string;
  referrer: string;
}

export type Collector = typeof Collectors[keyof typeof Collectors];

export type CollectorOutput<T extends Collector> = ReturnType<T["generate"]>;

export type Metadata1Data = UnionMerge<CollectorOutput<Collector>>;
