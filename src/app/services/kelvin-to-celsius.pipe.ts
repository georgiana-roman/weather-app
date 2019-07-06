import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(temperature: number): number {
    const celsius = Math.round(temperature - 273.15);
    return celsius;
  }

}
