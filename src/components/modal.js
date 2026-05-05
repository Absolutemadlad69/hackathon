// Modal Component
export class Modal {
  constructor(options) {
    this.options = options;
  }
  open() {
    console.log('Modal opened');
  }
  close() {
    console.log('Modal closed');
  }
}
