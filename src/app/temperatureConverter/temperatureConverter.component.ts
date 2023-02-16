import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter {


  private _celsius: number;
  public get celsius(): number {
    return this._celsius;
  }
  public set celsius(v: number) {
    if (this._celsius == v) return;
    this._celsius = v;
    this._farenheit = Number(this.decimalPipe.transform(this.celsius * 9 / 5 + 32, '1.1-1'));
  }

  private _farenheit: number;
  public get farenheit(): number {
    return this._farenheit;
  }
  public set farenheit(v: number) {
    if (this._farenheit == v) return;
    this._farenheit = v;
    this._celsius = Number(this.decimalPipe.transform((this.farenheit - 32) * 5 / 9, '1.1-1'));
  }

  constructor(private decimalPipe: DecimalPipe) { }

}
