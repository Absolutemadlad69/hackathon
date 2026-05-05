// DataTable Component
export class DataTable {
  constructor(elementId, config) {
    this.elementId = elementId;
    this.config = config;
  }
  render(data) {
    console.log(`Rendering datatable with ${data.length} records`);
  }
}
