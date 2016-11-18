import { AssetListModel } from '../models/asset';

export class AssetService {

    getAssetList() {
        return [
            new AssetListModel ("001", "Active", "ML", new Date(2016, 12, 31)),
            new AssetListModel ("002", "Active", "SPL", new Date(2017, 12, 31)),
            new AssetListModel ("003", "Application", "EPL", new Date(2018, 12, 31)),
            new AssetListModel ("004", "Expired", "ML", new Date(2000, 12, 31)),
            new AssetListModel ("005", "Active", "SPL", new Date(2020, 12, 31)),
            new AssetListModel ("006", "Application", "EPL", new Date(2021, 12, 31)),
            new AssetListModel ("007", "Active", "ML", new Date(2022, 12, 31)),
        ]
    }
}
