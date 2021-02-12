export function mapPlaceToDisplayValue(place) {
    if (place <= 4) {
      return `${place}.`;
    }
    if (place <= 8) {
      return "TOP8";
    }
    if (place <= 16) {
      return "TOP16"
    }
    return place;
  }