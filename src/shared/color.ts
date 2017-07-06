export class Color {
  static StartColor = new Color(255, 255, 255); // white
  static EndColor = new Color(243, 30, 116); // some pink

  static interpolateColor(value: number, maxValue = 100): Color {
    if (value === 0) {
      return Color.StartColor;
    }

    let startColors = Color.StartColor.getColors(),
      endColors = Color.EndColor.getColors();

    let r = Color.interpolateColorPart(startColors.r, endColors.r, maxValue, value);
    let g = Color.interpolateColorPart(startColors.g, endColors.g, maxValue, value);
    let b = Color.interpolateColorPart(startColors.b, endColors.b, maxValue, value);

    return new Color(r, g, b);
  }

  static interpolateColorPart(start, end, steps, count) {
    let s = start,
      e = end,
      final = s + (((e - s) / steps) * count);
    return Math.floor(final);
  }

  constructor(private r, private g, private b) {
  }

  getColors() {
    return {
      r: this.r,
      g: this.g,
      b: this.b
    };
  };

  toRGB(): string {
    return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
  }

  toHex(): string {
    let rgb = this.b | (this.g << 8) | (this.r << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
  }
};
