export interface IGeoJSONPoint {
	type: String;
	coordinates: number[];
}

export interface IGeoJSONMultiPolygon {
	type: String;
	coordinates: number[][][][];
}

export interface IPartnerModel {
  id: String;
  tradingName: String;
  ownerName: String;
  document: String;
  coverageArea: IGeoJSONMultiPolygon;
  address: IGeoJSONPoint;
  createdAt?: Date;
}
