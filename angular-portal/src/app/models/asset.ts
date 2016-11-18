export class AssetListModel {
    constructor(
        public Code: string,
        public StatusDescription: string,
        public TypeDescription: string,
        public ExpiryDate: Date) {}
}