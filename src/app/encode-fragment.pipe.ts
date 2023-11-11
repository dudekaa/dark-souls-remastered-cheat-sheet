import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeFragment',
  standalone: true,
})
export class EncodeFragmentPipe implements PipeTransform {

  transform(value: string): string {
    // FIXME figure out what is actualy banned / supported. I think at least '+' is banned too
    return value.replaceAll(' ', '_').toLowerCase();
  }
}
