const IGeoJSONPoint = {
	type: '',
	coordinates: []
}

const IGeoJSONMultiPolygon = {
	type: '',
	coordinates: [[[[]]]]
}

const IPartnerModel = {
  id: '',
  tradingName: '',
  ownerName: '',
  document: '',
  coverageArea: IGeoJSONMultiPolygon,
  address: IGeoJSONPoint,
  createdAt: ''
}

export default IPartnerModel
