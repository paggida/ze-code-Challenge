import geoJsonTypeEnum from '../enums/PartnerEnum'

export interface IGeoJSONPoint {
	type: geoJsonTypeEnum.Point;
	coordinates: number[];
}

export interface IGeoJSONMultiPolygon {
	type: geoJsonTypeEnum.MultiPolygon;
	coordinates: number[][][][];
}

export interface IPartnerModel {
  id: String;
  tradingName: String;
  ownerName: String;
  document: String;
  coverageArea: IGeoJSONMultiPolygon;
  address: IGeoJSONPoint;
  createdAt: Date;
}
