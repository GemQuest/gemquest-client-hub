// src/utils/dataFormattingUtils.ts

export function renderCellValue(value: unknown): React.ReactNode {
    if (value === null || value === undefined) return null;
  
    if (typeof value === "string" || typeof value === "number") {
      return value;
    }
  
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
  
    if (value instanceof Date) {
      return value.toLocaleDateString();
    }
  
    if (Array.isArray(value)) {
      return value.join(", ");
    }
  
    return JSON.stringify(value);
  }
  