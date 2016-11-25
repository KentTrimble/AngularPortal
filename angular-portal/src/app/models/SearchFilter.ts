import { SearchFilterTypeEnum } from './SearchFilterTypeEnum';
import { SearchFilterDropDownValue } from './SearchFilterDropDownValue';

export class SearchFilter {
    public PropertyID: string;
    public PropertyName: string;
    public Type: SearchFilterTypeEnum;
    public DropDownValues:  Array<SearchFilterDropDownValue>;

    constructor(propertyID: string, propertyName: string, type: SearchFilterTypeEnum, dropDownValues?: Array<SearchFilterDropDownValue>) {
        this.PropertyID = propertyID;
        this.PropertyName = propertyName;
        this.Type = type;
        this.DropDownValues = dropDownValues;
    }
}
