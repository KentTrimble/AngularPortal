import { SearchFilter } from './SearchFilter';
import { SearchFilterDropDownValue } from './SearchFilterDropDownValue';
import { SearchFilterTypeEnum } from './SearchFilterTypeEnum';

export class SearchFilters {
    public Filters: Array<SearchFilter> = new Array<SearchFilter>();

    static CreateDummyData():SearchFilters {
        let searchFilters = new SearchFilters();

        searchFilters.Filters.push(new SearchFilter('Status', 'Status', SearchFilterTypeEnum.DropDown, [new SearchFilterDropDownValue('Active', 'Active'), new SearchFilterDropDownValue('Inactive', 'Inactive')]));
        searchFilters.Filters.push(new SearchFilter('Type', 'Type', SearchFilterTypeEnum.DropDown, [new SearchFilterDropDownValue('LSMP', 'LargeSCaleMining Permit'), new SearchFilterDropDownValue('SSMP', 'Small Scale Mining Permit')]));

        console.log(JSON.stringify(searchFilters));

        return searchFilters;
    }
}