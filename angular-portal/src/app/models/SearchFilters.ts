import { SearchFilter } from './SearchFilter';
import { SearchFilterDropDownValue } from './SearchFilterDropDownValue';
import { SearchFilterTypeEnum } from './SearchFilterTypeEnum';

export class SearchFilters {
    public Filters: Array<SearchFilter> = new Array<SearchFilter>();

    static CreateDummyData():SearchFilters {
        let searchFilters = new SearchFilters();

        searchFilters.Filters.push(new SearchFilter('*', 'Select filter', SearchFilterTypeEnum.DropDown, []));
        searchFilters.Filters.push(new SearchFilter('Status', 'Status', SearchFilterTypeEnum.DropDown, [new SearchFilterDropDownValue('Select a value', '*'), new SearchFilterDropDownValue('Active', 'Active'), new SearchFilterDropDownValue('Inactive', 'Inactive')]));
        searchFilters.Filters.push(new SearchFilter('Type', 'Type', SearchFilterTypeEnum.DropDown, [new SearchFilterDropDownValue('Select a value', '*'), new SearchFilterDropDownValue('Large Scale Mining Permit', 'LSMP'), new SearchFilterDropDownValue('Small Scale Mining Permit', 'SSMP')]));

        console.log(JSON.stringify(searchFilters));

        return searchFilters;
    }
}