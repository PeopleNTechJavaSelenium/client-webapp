import {  PipeTransform, Pipe } from '@angular/core';
import { EmpProfile } from "../profiles/emp.profiles";


@Pipe({
    name: 'empFilter'
})
export class EmpProfileFilterPipe implements PipeTransform {
    transform(value: EmpProfile[], filterBy: string): EmpProfile[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
            return filterBy ? value.filter((profile: EmpProfile) =>
                profile.empName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
